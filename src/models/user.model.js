import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        fullName: {
            type: String,
            required: true
        },
        googleId: {
            type: String,
            required: true
        },
        phoneNum: {
            type: Number,
        },
        preferredJobRoles: {
            type: String
        },
        refreshToken: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema);