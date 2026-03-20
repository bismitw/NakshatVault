    import "dotenv/config"
    import express from "express"
    import cors from "cors";
    import cookieParser from "cookie-parser";
    import helmet from "helmet"

    const app = express()

    app.use(
        cors({
            origin: process.env.CORS_ORIGIN,
            credentials: true
        })
    )

    app.use(helmet())
    export {app}