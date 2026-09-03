import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";

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

userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};

userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
};

export const User = mongoose.model("User", userSchema);