import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiRes } from "../utils/ApiRes.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { oauth2Client } from "../utils/googleClient.js";
import { google } from "googleapis";

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

        return res
        .status(200)
        .json(
            new ApiRes(
                200,
                response,
                "Gmail fetched successfully!"
            )
        )

    }
)

export { 
    fetchEmails,
    fetchEmailById
}