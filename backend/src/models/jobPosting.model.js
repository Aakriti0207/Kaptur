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
        contactEmail: String,
        postedDate: Date,
        isActive: {
            type: Boolean,
            default: true
        },
        course: String,
        batchYear: String,
        skills: [String],
        portfolioUrl: String,
        githubUrl: String,
        linkedinUrl: String,
        profileCompleted: { 
            type: Boolean, 
            default: false 
        }
    },
    {
        timestamps: true
    }
)

export const jobPostings = mongoose.model("jobPostings", jobPostingSchema)