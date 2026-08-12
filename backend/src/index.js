import "dotenv/config";
import { connectDB } from "./DB/indexDB.js";
import { app } from "./app.js";

connectDB()
.then(
    () => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at ${process.env.PORT}`)
        })
    }
)
.catch((error) => {
    console.log("DB Connection Error - ", error);
})