import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { archiveApplication, getUserApplications, updateApplicationStatus, updateApplication, createApplication } from "../controller/application.controller.js";

const applicationRouter = Router();

applicationRouter.route("/").get(verifyJWT, getUserApplications);
applicationRouter.route("/create-application").post(verifyJWT, createApplication);
applicationRouter.route("/:applicationId/edit-application").patch(verifyJWT, updateApplication);
applicationRouter.route("/:applicationId/status").patch(verifyJWT, updateApplicationStatus);
applicationRouter.route("/:applicationId/archive").patch(verifyJWT, archiveApplication);

export { applicationRouter }