import { Router } from "express";
import { fetchEmails } from "../controller/gmail.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const gmailRouter = Router();

gmailRouter.route("/gmails").get(verifyJWT, fetchEmails)
gmailRouter.route("/:messageId").get(verifyJWT, fetchEmails);

export { gmailRouter }