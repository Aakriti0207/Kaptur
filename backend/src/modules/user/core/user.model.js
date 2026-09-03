import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";

const experienceSchema = new Schema(
    {
        company: {
            type: String,
            trim: true
        },

        role: {
            type: String,
            trim: true
        },

        employmentType: {
            type: String,
            trim: true
        },

        startDate: {
            type: String
        },

        endDate: {
            type: String,
            default: null
        },

        current: {
            type: Boolean,
            default: false
        },

        skills: {
            type: [String],
            default: []
        }
    },
    {
        _id: false
    }
);


const educationSchema = new Schema(
    {
        institution: {
            type: String,
            trim: true
        },

        degree: {
            type: String,
            trim: true
        },

        fieldOfStudy: {
            type: String,
            trim: true
        },

        startYear: {
            type: Number
        },

        graduationYear: {
            type: Number
        },

        cgpa: {
            type: Number
        }
    },
    {
        _id: false
    }
);


const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        fullName: {
            type: String,
            required: true,
            trim: true
        },

        googleId: {
            type: String,
            required: true
        },

        phoneNum: {
            type: String
        },

        refreshToken: {
            type: String,
            required: true
        },

        skills: {
            type: [String],
            default: []
        },

        coreSkills: { //core subjects
            type: [String],
            default: []
        },

        experience: {
            type: [experienceSchema],
            default: []
        },

        education: {
            type: [educationSchema],
            default: []
        },

        githubUrl: {
            type: String,
            trim: true
        },

        linkedinUrl: {
            type: String,
            trim: true
        },

        portfolioUrl: {
            type: String,
            trim: true
        },

        resume: {
            fileName: {
                type: String,
                default: null
            },

            uploadedAt: {
                type: Date,
                default: null
            }
        },

        profileCompleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);


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