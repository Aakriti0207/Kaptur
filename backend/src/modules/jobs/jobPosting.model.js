import mongoose, {Schema} from "mongoose";

const jobPostingSchema = new Schema (
    {
        title: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        location: {
            type: String
        },
        stipend: {
            type: String
        },
        applyLink: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        source: {
            type: String,
            required: true
        },
        sourceId: {
            type: String,
            required: true,
            unique: true
        },
        extractedSkills: [{
            type: String,
        }],
        eligibleBatches: [String],
        experienceLevel: String,
        employmentType: String,
        postedDate: Date,
        fetchedAt: Date,
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

export const jobPostings = mongoose.model("jobPostings", jobPostingSchema)