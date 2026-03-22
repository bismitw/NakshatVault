    import "dotenv/config"
    import express from "express"
    import cors from "cors";
    import cookieParser from "cookie-parser";
    import helmet from "helmet"
    import compression from "compression";
    const app = express()

    app.use(
        cors({
            origin: process.env.CORS_ORIGIN,
            credentials: true
        })
    )

    app.use(helmet())
    app.use(compression())


    app.use(express.json({limit:"16kb"}))
    app.use(cookieParser());
    export {app}