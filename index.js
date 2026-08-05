import { configDotenv } from "dotenv";
import { connectDB } from "./src/DB/indexDB";

connectDB()
.then(
    () => {
        app.on("error", (error) => {
            console.log("Error-" , error)
            throw error
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at ${process.env.PORT}`)
        })
    }
)
.catch((error) => {
    console.log("DB Connection Error - ", error);
})