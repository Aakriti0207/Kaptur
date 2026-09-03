import { asyncHandler } from "../../../utils/asyncHandler.js";
import { apiRes } from "../../../utils/apiRes.js";
import { apiError } from "../../../utils/apiError.js";

import { parseResume } from "./resume.service.js";


const parseResumeFile = asyncHandler(
    async (req, res) => {
        if (!req.file) {
            throw new apiError(
                400,
                "Please upload a resume PDF"
            );
        }


        const result = await parseResume(
            req.file.buffer
        );


        return res
            .status(200)
            .json(
                new apiRes(
                    200,
                    result,
                    "Resume parsed successfully"
                )
            );
    }
);


export {
    parseResumeFile
};