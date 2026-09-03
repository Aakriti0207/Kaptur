import { Router } from "express";
import multer from "multer";

import { verifyJWT } from "../../../middleware/auth.middleware.js";
import { parseResumeFile } from "./resume.controller.js";


const resumeRouter = Router();


const storage = multer.memoryStorage();


const upload = multer({
    storage,

    limits: {
        fileSize: 5 * 1024 * 1024
    },

    fileFilter: (req, file, cb) => {
        if (file.mimetype !== "application/pdf") {
            return cb(
                new Error(
                    "Only PDF resumes are allowed"
                )
            );
        }

        cb(null, true);
    }
});


resumeRouter.post(
    "/parse",
    verifyJWT,
    upload.single("resume"),
    parseResumeFile
);


export { resumeRouter };