import { Router } from "express";
import { googleCallback, googleLogin } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.get("/google", googleLogin);
authRouter.get("/google/callback", googleCallback);

export { authRouter }