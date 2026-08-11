import { Application } from "../models/application.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiRes } from "../utils/ApiRes.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getUserApplications = asyncHandler(
    async(req,res) => {
        const applications = await Application.find(
            {
                userId: req.user?._id,
                isArchived: false
            }
        ).sort(
            {
                createdAt: -1
            }
        )
        return res
        .status(200)
        .json(
            new ApiRes(
                200,
                applications,
                "Applications fetched successfully!"
            )
        )
    }
)

const updateApplicationStatus = asyncHandler(
    async(req,res) => {
        const { applicationId } = req.params
        const { status } = req.body
        const validStatuses = ["Applied", "OA", "Interview", "Offer", "Stale"];
        if(!validStatuses.includes(status)){
            throw new ApiError(
                400,
                "Invalid status value"
            )
        }
        const application = await Application.findOneAndUpdate(
            {
                _id: applicationId,
                userId: req.user._id
            },
            { status },
            {
                new: true
            }
        )
        if(!application){
            throw new ApiError(
                400,
                "Application not found!"
            )
        }
        return res
        .status(200)
        .json(
            new ApiRes(
                200,
                application,
                "Status updated successfully"
            )
        )

    }
)

const archiveApplication = asyncHandler(
    async(req,res) => {
        const { applicationId } = req.params
        const application = await Application.findOneAndUpdate(
            {
                _id: applicationId,
                userId: req.user._id
            },
            {
                isArchived: true,
            },
            {
                new: true
            }
        );
        if(!application){
            throw new ApiError(
                400,
                "Application not found!"
            )
        }
        return res
        .status(200)
        .json(
            new ApiRes(
                200,
                application,
                "Application archived successfully!"
            )
        )
    }
)

export { 
    getUserApplications,
    updateApplicationStatus,
    archiveApplication
}