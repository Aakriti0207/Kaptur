import { Router } from "express";
import { fetchEmailById, fetchEmails, syncEmails } from "../controller/gmail.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const gmailRouter = Router();

gmailRouter.route("/").get(verifyJWT, fetchEmails);
gmailRouter.route("/sync").get(verifyJWT, syncEmails);
gmailRouter.route("/:messageId").get(verifyJWT, fetchEmailById);

export { gmailRouter }