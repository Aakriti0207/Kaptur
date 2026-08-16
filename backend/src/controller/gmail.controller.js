import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiRes } from "../utils/ApiRes.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { extractJobData } from "../services/llmExtraction.service.js";
import { Application } from "../models/application.model.js";
import { getMailContent, getGmailClient, listOfFilteredMails } from "../services/gmail.services.js";
import { parseGmailData } from "../utils/parseGmailData.js";

const fetchEmails = asyncHandler(
    async(req,res) => {
        const user = await User.findById(req.user._id);

        if(!user.refreshToken){
            throw new ApiError(
                404,
                "User not logged in"
            )
        }

        const gmail = getGmailClient(user.refreshToken);

        const messages = await listOfFilteredMails(gmail); 

        if(!messages){
            throw new ApiError(
                500,
                "Failed to fetch emails"
            )
        }

        return res
        .status(200)
        .json(
            new ApiRes(
                200,
                messages,
                "Mails fetched successfully!"
            )
            
        )
    }
)

const fetchEmailById = asyncHandler(
    async(req,res) => {
        const user = await User.findById(req.user._id);

        if(!user || !user.refreshToken){
            throw new ApiError(
                404,
                "User not logged in"
            )
        }

        const gmail = getGmailClient(user.refreshToken);
        const { messageId } = req.params;
        const rawData = await getMailContent(gmail, messageId);

        if(!rawData){
            throw new ApiError(
                500,
                "Failed to fetch email"
            )
        }

        const parsed = parseGmailData(rawData);
        const extracted = await extractJobData(parsed);

        let application;

        if(extracted.isJobRelated === true){
            const existing = await Application.findOne({ sourceEmailId: messageId });
            if(!existing){
                application = await Application.create(
                    {
                        userId: req.user._id,
                        company: extracted.company,
                        role: extracted.role,
                        status: extracted.status,
                        appliedDate: new Date(parsed.date),
                        sourceEmailId: messageId,
                        sourceEmailSnippet: parsed.snippet,
                    }
                )

                if(!application){
                    throw new ApiError(
                        500,
                        "Failed to generate application"
                    )
                }
            }else{
                application=existing
            }
        }

        return res
        .status(200)
        .json(
            new ApiRes(
                200,
                {extracted, application},
                "Gmail fetched successfully!"
            )
        )

    }
)

const syncEmails = asyncHandler(
    async(req,res) => {
        const user = await User.findById(req.user._id);
        if(!user?.refreshToken){
            throw new ApiError(
                400,
                "User not logged in"
            )
        }

        console.log("User", user);

        const gmail = getGmailClient(user.refreshToken);
        const messages = await listOfFilteredMails(gmail);

        console.log("gmail-", gmail);
        console.log("messages", messages);
        
        const newApplications = [];
        let skippedCount = 0;
        let notJobRelatedCount = 0;

        for(const msg of messages){
            const existing = await Application.findOne(
                {sourceEmailId: msg.id}
            );
            if(existing){
                skippedCount++;
                continue;
            }

            console.log("MESSAGE ID TYPE:", typeof msg.id);
            console.log("MESSAGE ID VALUE:", JSON.stringify(msg.id));

            const rawData = await getMailContent(gmail, msg.id);
            const parsed = parseGmailData(rawData);
            const extracted = await extractJobData(parsed);

            if(!extracted.isJobRelated){
                notJobRelatedCount++;
                continue;
            }

            const application = await Application.create(
                {
                    userId: req.user._id,
                    company: extracted.company,
                    role: extracted.role,
                    status: extracted.status,
                    appliedDate: new Date(parsed.date),
                    sourceEmailId: msg.id,
                    sourceEmailSnippet: parsed.snippet,
                }
            )

            newApplications.push(application);
        }

        return res
        .status(200)
        .json(
            new ApiRes(
                200,
                {
                    newApplications,
                    summary: {
                        totalScanned: messages.length,
                        newlyAdded: newApplications.length,
                        alreadyTracked: skippedCount,
                        notJobRelated: notJobRelatedCount
                    }
                },
                `Sync complete! ${newApplications.length} new application(s) found.`
            )
        )
    }
)

const previewInbox = asyncHandler(
    async (req, res) => {
        const user = await User.findById(req.user._id);
        if (!user?.refreshToken){
            throw new ApiError(
                404, 
                "User not logged in"
            );
        }

        const gmail = getGmailClient(user.refreshToken);
        const messages = await listOfFilteredMails(gmail);

        const recentFive = messages.slice(0, 5);

        const preview = await Promise.all(
            recentFive.map(async (msg) => {
                const rawData = await getMailContent(gmail, msg.id);
                const parsed = parseGmailData(rawData);
                return {
                    id: msg.id,
                    subject: parsed.subject,
                    from: parsed.from,
                    snippet: parsed.snippet,
                    date: parsed.date,
                };
            })
        );

        return res
        .status(200)
        .json(
            new ApiRes(
                200, 
                preview, 
                "Inbox preview fetched!"
            )
        );    
    }
);

export { 
    fetchEmails,
    fetchEmailById,
    syncEmails,
    previewInbox
}