import { Router } from "express";
import { fetchEmailById, fetchEmails } from "../controller/gmail.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const gmailRouter = Router();

gmailRouter.route("/").get(verifyJWT, fetchEmails)
gmailRouter.route("/:messageId").get(verifyJWT, fetchEmailById);

export { gmailRouter }