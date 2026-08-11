import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { getDashboardStats } from "../controller/dashboard.controller.js";

const dashboardRouter = Router();

dashboardRouter.route("/").get(verifyJWT, getDashboardStats);

export { dashboardRouter }