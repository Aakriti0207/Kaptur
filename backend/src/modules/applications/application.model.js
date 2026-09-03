import mongoose, {Schema} from "mongoose";

const applicationSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        company: {
            type: String,
            trim: true
        },
        role: {
            type: String,
            trim: true
        },
        package: {
            type: String
        },
        platform: {
            type: String
        },
        status: {
            type: String,
            enum: ["APPLIED", "OA", "INTERVIEW", "OFFER", "REJECTED"],
            default: "APPLIED"
        },
        appliedDate: {
            type: Date
        },
        sourceEmailId: {
            type: String,
            required: true,
            unique: true
        },
        sourceEmailSnippet: {
            type: String
        },
        isArchived: {
            type: Boolean,
            default: false
        },
        notes: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

export const Application = mongoose.model("Application", applicationSchema)