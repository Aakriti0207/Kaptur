import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
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
import { authRouter } from "./routes/auth.routes.js";
import { gmailRouter } from "./routes/gmail.routes.js";
import { applicationRouter } from "./routes/application.routes.js";

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/gmails", gmailRouter);
app.use("/api/v1/applications", applicationRouter);

export {app}