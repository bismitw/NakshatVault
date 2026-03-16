
import connectDB from "./src/config/database"
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