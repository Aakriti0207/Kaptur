import { Router } from "express";
import { getProfile, updateProfile } from "../controller/profile.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const profileRouter = Router();

profileRouter.route("/").get(verifyJWT, getProfile);
profileRouter.route("/update").patch(verifyJWT, updateProfile);

export { profileRouter }