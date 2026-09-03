import { apiRes } from "../../../utils/apiRes.js";
import { apiError } from "../../../utils/apiError.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import { User } from "../core/user.model.js";

const getProfile = asyncHandler(
    async (req, res) => {
        return res
        .status(200)
        .json(
            new apiRes(
                200,
                req.user, 
                "Profile fetched successfully!"
            )
        );
    }
);

const updateProfile = asyncHandler(
    async (req, res) => {
        const {
            fullName,
            phoneNum,

            skills,
            coreSkills,

            experience,
            education,

            githubUrl,
            linkedinUrl,
            portfolioUrl
        } = req.body;

        const hasSkills = Array.isArray(skills) && skills.length > 0;
        const hasEducation = Array.isArray(education) && education.length > 0 && education.some((item) => item.degree && item.graduationYear);

        const profileCompleted = hasSkills && hasEducation;

        const user = await User.findByIdAndUpdate(
            req.user._id,
            { 
                $set: { 
                    ...(fullName !== undefined && { fullName }),
                    ...(phoneNum !== undefined && { phoneNum }),

                    ...(skills !== undefined && { skills }),
                    ...(coreSkills !== undefined && { coreSkills }),

                    ...(experience !== undefined && { experience }),
                    ...(education !== undefined && { education }),

                    ...(githubUrl !== undefined && { githubUrl }),
                    ...(linkedinUrl !== undefined && { linkedinUrl }),
                    ...(portfolioUrl !== undefined && { portfolioUrl }),

                    profileCompleted
                }
            },
            { 
                new: true,
                runValidators: true 
            }
        ).select("-refreshToken");

        if (!user) {
            throw new apiError(
                404,
                "User not found"
            );
        }

        return res
        .status(200)
        .json(
            new apiRes(
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