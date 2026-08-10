import { gmail } from "googleapis/build/src/apis/gmail/index.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiRes } from "../utils/ApiRes.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { oauth2Client } from "../utils/googleClient.js";
import { google } from "googleapis";
import { extractJobData } from "../services/llmExtraction.service.js";
import { Application } from "../models/application.model.js";

function findPart(parts, mimeType) {
    for (const part of parts) {
        if (part.mimeType === mimeType && part.body?.data) {
            return part;
        }
        if (part.parts) {
            const found = findPart(part.parts, mimeType);
            if (found) return found;
        }
    }
    return null;
}

function parseGmailData(gmailData){
    const headers = gmailData.payload.headers;

    const getHeader = (name) => {
        return headers.find(h => h.name === name)?.value || "";
    }

    const subject = getHeader("Subject");
    const from = getHeader("From");
    const date = getHeader("Date");

    //Decode Body
    let bodyData = "";
    if(gmailData.payload.parts){
        const htmlPart = findPart(gmailData.payload.parts, "text/html");
        const textPart = htmlPart ? null : findPart(gmailData.payload.parts, "text/plain");
        const part = htmlPart || textPart;
        if (part) {
            bodyData = Buffer.from(part.body.data, "base64").toString("utf-8");
        }
    }else if(gmailData.payload.body?.data) {
        bodyData = Buffer.from(gmailData.payload.body.data, "base64").toString("utf-8");
    }

    return { subject, from, date, snippet: gmailData.snippet, body: bodyData };

}

const fetchEmails = asyncHandler(
    async(req,res) => {
        const user = await User.findById(req.user._id);

        if(!user || !user.refreshToken){
            throw new ApiError(
                404,
                "User not logged in"
            )
        }

        oauth2Client.setCredentials(
            {
                refresh_token: user.refreshToken
            }
        )

        const gmail = google.gmail(
            {
                version: "v1",
                auth: oauth2Client
            }
        );

        const response = await gmail.users.messages.list(
            {
                userId: "me",
                q: `subject:(interview OR congratulations OR "application received" OR shortlisted OR "thank you for applying")`,
                maxResults: 20
            }
        );

        if(!response){
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
                response.data.messages,
                "Emails fetched successfully!"
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

        oauth2Client.setCredentials(
            {
                refresh_token: user.refreshToken
            }
        )

        const gmail = google.gmail(
            {
                version: "v1",
                auth: oauth2Client
            }
        )

        const { messageId } = req.params;
        const response = await gmail.users.messages.get(
            {
                userId: "me",
                id: messageId,
                format: "full"
            }
        )

        if(!response){
            throw new ApiError(
                500,
                "Failed to fetch email"
            )
        }

        const parsed = parseGmailData(response.data);

        console.log("=== PARSED EMAIL ===");
        console.log("subject:", parsed.subject);
        console.log("from:", parsed.from);
        console.log("body length:", parsed.body.length);
        console.log("body preview:", parsed.body.slice(0, 300));

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

        console.log("application", application);
        console.log("company", extracted.company);

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