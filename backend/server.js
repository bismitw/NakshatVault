import dotenv from "dotenv"
dotenv.config()
import {app} from "./app.js"
import connectDB from "./src/config/database.js"

const PORT = process.env.PORT || 8001

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        });
    })

    .catch((err) => {
        console.log("MonogoDB connection Error", err);
    })