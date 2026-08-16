import { Application } from "../models/application.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiRes } from "../utils/apiRes.js";

const getDashboardStats = asyncHandler(
    async(req,res) => {
        const userId = req.user._id;
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const [
            totalApplications,
            interviewsThisWeek,
            onlineAssessments,
            offers,
            rejected
        ] = await Promise.all(
            [
                Application.countDocuments({ userId, isArchived:false }),
                Application.countDocuments(
                    {
                        userId,
                        isArchived: false,
                        status: "Interview",
                        updatedAt: {$gte: sevenDaysAgo}
                    }
                ),
                Application.countDocuments({ userId, isArchived: false, status: "OA" }),
                Application.countDocuments({ userId, isArchived: false, status: "Offer" }),
                Application.countDocuments({ userId, isArchived: false, status: "Rejected" })
            ]
        )

        return res
        .status(200)
        .json(
            new apiRes(
                200,
                {
                    totalApplications,
                    interviewsThisWeek,
                    onlineAssessments,
                    offers,
                    rejected
                },
                "Dashboard stats fetched successfully!"
            )
        )
    }
)

export { getDashboardStats }