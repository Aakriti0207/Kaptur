import { google } from "googleapis";
import { oauth2Client } from "../utils/googleClient.js";

const getGmailClient = (refreshToken) => {
    oauth2Client.setCredentials(
        {
            refresh_token: refreshToken
        }
    )
    return google.gmail(
        {
            version: "v1",
            auth: oauth2Client
        }
    )
}

const listOfFilteredMails = async(gmail) => {
    const response = await gmail.users.messages.list(
        {
            userId: "me",
            q: `(
                interview OR
                "online assessment" OR
                "online test" OR
                "application received" OR
                "thank you for applying" OR
                shortlisted OR
                selected OR
                congratulations OR
                "offer letter" OR
                "we're pleased to offer" OR
                rejection OR
                rejected OR
                "not moving forward"
            )`,
            maxResults: 20
        }
    )
    return response.data.messages || [];
}

const getMailContent = async(gmail, messageId) => {
    const response = await gmail.users.messages.get(
        {
            userId: "me",
            id: messageId,
            format: "full"
        }
    )
    return response.data;
}

export {
    getGmailClient,
    listOfFilteredMails,
    getMailContent
}