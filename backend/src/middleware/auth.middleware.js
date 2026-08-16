import jwt from "jsonwebtoken"
import { asyncHandler } from "../utils/asyncHandler.js"
import { apiError } from "../utils/apiError.js"
import { User } from "../models/user.model.js"

export const verifyJWT = asyncHandler(
    async(req,res,next) => {
        try {
            const accessToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
            if(!accessToken){
                throw new apiError(
                    404,
                    "Token not found! Unauthorized request"
                )
            }
    
            const decodedToken = jwt.verify(
                accessToken,
                process.env.ACCESS_TOKEN_SECRET
            )
    
            const user = await User.findById(decodedToken._id).select(
                "-refreshToken"
            )
        
            if(!user){
                throw new apiError(
                    401,
                    "Invalid Access Token"
                )
            }
        
            req.user = user;
            next()
        }catch (error) {
            throw new apiError(
                401,
                error?.message || "Invalid Access Token"
            )
        }
    }
)
