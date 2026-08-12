import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { archiveApplication, getUserApplications, updateApplicationStatus } from "../controller/application.controller.js";

const applicationRouter = Router();

applicationRouter.route("/").get(verifyJWT, getUserApplications);
applicationRouter.route("/:applicationId/status").patch(verifyJWT, updateApplicationStatus);
applicationRouter.route("/:applicationId/archive").patch(verifyJWT, archiveApplication);

export { applicationRouter }