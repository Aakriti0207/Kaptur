import { Router } from "express";
import { googleCallback, googleLogin, logoutUser } from "../controller/auth.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const authRouter = Router();

authRouter.route("/google").get(googleLogin);
authRouter.route("/google/callback").get(googleCallback);
authRouter.route("/logout").post(verifyJWT, logoutUser);

export { authRouter }