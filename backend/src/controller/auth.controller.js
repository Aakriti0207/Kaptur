import { version } from "mongoose";
import { oauth2Client } from "../utils/googleClient.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { google } from "googleapis";
import { User } from "../models/user.model.js";
import { ApiRes } from "../utils/ApiRes.js";

const googleLogin = asyncHandler(
    async(req,res) => {

        //Exactly what access we need - scopes
        const scopes = [
            "https://www.googleapis.com/auth/gmail.readonly",
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile"
        ];

        //Generate special url of google
        const url = oauth2Client.generateAuthUrl(
            {
                access_type: "offline", //also generates refresh token!
                scope: scopes,
                prompt: "consent"   //guarentees refresh token everytime user logsin NOT just first time!
            }
        );

        res.redirect(url);
    }
)

const googleCallback = asyncHandler(
    async(req,res) => {
        const { code } = req.query;
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        const oauth2 = google.oauth2(
            {
                version: "v2",
                auth: oauth2Client
            }
        );

        const { data } = await oauth2.userinfo.get();

        let user = await User.findOne(
            {
                googleId: data.id
            }
        );

        if(!user){
            user = await User.create(
                {
                    googleId: data.id,
                    email: data.email,
                    fullName: data.name,
                    refreshToken: tokens.refresh_token
                }
            )
        }else{
            user.refreshToken = await tokens.refresh_token;
            await user.save();
        }

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
        };

        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .redirect("http://localhost:5173/")
        // .json(
        //     new ApiRes(
        //         200,
        //         user,
        //         "Permission grant successful!"
        //     )
        // )
    }
)

export {
    googleLogin,
    googleCallback
}