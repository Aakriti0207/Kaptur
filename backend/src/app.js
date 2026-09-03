import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN || "http://localhost:5173",
        credentials: true
    }
))

app.use(express.json(
    {
        limit: "16kb"
    }
))

app.use(express.urlencoded(
    {
        extended: true,
        limit: "16kb"
    }
))

app.use(cookieParser())

app.use(express.static("public"))

//Routes
import { authRouter } from "./modules/auth/auth.routes.js";
import { gmailRouter } from "./modules/gmail/gmail.routes.js";
import { applicationRouter } from "./modules/applications/application.routes.js";
import { dashboardRouter } from "./modules/dashboard/dashboard.routes.js";
import { profileRouter } from "./modules/user/profile/profile.routes.js";
import { matchesRouter } from "./modules/dailyMatches/dailyMatches.routes.js";

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/gmails", gmailRouter);
app.use("/api/v1/applications", applicationRouter);
app.use("/api/v1/dashboard", dashboardRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/daily-matches", matchesRouter);

export {app}