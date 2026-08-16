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

const createApplication = asyncHandler(
    async (req, res) => {
        const { company, role, status, package: packageAmount, platform, appliedDate, notes } = req.body;

        if (!company){
            throw new ApiError(
                400,
                "Company name is required"
            );
        }

        const application = await Application.create(
            {
                userId: req.user._id,
                company, 
                role, 
                status, 
                package: packageAmount, 
                platform,
                appliedDate: appliedDate || new Date(),
                notes,
                sourceEmailId: `manual-${Date.now()}-${req.user._id}`, // unique rakhna zaroori hai schema ke liye
            }
        );

        return res
        .status(201)
        .json(
            new ApiRes(
                201, 
                application, 
                "Application added!"
            )
        );
    }
);

const updateApplication = asyncHandler(async (req, res) => {
    const { applicationId } = req.params;
    const { company, role, status, package: packageAmount, platform, appliedDate, notes } = req.body;

    if(!(company || role || status || packageAmount || platform || appliedDate || notes)){
        throw new ApiError(
            400,
            "Any one field must be updated!"
        )
    }

    const application = await Application.findOneAndUpdate(
        { 
            _id: applicationId, 
            userId: req.user._id 
        },
        { 
            $set: { 
                company, 
                role, 
                status, 
                package: packageAmount, 
                platform, 
                appliedDate, 
                notes 
            } 
        },
        { new: true, runValidators: true }
    );

    if (!application){
        throw new ApiError(
            404, 
            "Application not found"
        );
    }

    return res
    .status(200)
    .json(
        new ApiRes(
            200, 
            application, 
            "Application updated!"
        )
    );
});

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
    createApplication,
    updateApplication,
    updateApplicationStatus,
    archiveApplication,
}