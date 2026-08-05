import express from "express";
import { configDotenv } from "dotenv";
import { connectDB } from "./src/DB/indexDB";

connectDB()

const app = express();

