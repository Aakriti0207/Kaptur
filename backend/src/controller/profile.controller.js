import { ApiRes } from "../utils/ApiRes.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const getProfile = asyncHandler(
    async (req, res) => {
        return res
        .status(200)
        .json(
            new ApiRes(
                200,
                req.user, 
                "Profile fetched successfully!"
            )
        );
    }
);

const updateProfile = asyncHandler(
    async (req, res) => {
        const { fullName, phoneNum, preferredJobRoles } = req.body;

        if(!(fullName || phoneNum || preferredJobRoles)){
            throw new ApiError(
                400,
                "Any field is required"
            )
        }

        const user = await User.findByIdAndUpdate(
            req.user._id,
            { 
                $set: { 
                    fullName, 
                    phoneNum, 
                    preferredJobRoles 
                }
            },
            { new: true }
        ).select("-refreshToken");

        return res
        .status(200)
        .json(
            new ApiRes(
                200, 
                user, 
                "Profile updated successfully!"
            )
        );
    }
);

export { 
    getProfile, 
    updateProfile 
};