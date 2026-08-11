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

export { 
    fetchEmails,
    fetchEmailById
}