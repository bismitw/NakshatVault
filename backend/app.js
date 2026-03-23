    import "dotenv/config"
    import express from "express"
    import cors from "cors";
    import cookieParser from "cookie-parser";
    import helmet from "helmet"
    import compression from "compression";
    import authRouter from "./src/routes/auth.routes.js"


    const app = express()

    app.use(
        cors({
            origin: process.env.CORS_ORIGIN,
            credentials: true
        })
    )

    //common middleware
    app.use(helmet())
    app.use(compression())

    app.use(express.json({limit:"16kb"}))
    app.use(cookieParser());


    //routes
    app.use("/api/v1/auth", authRouter)


    export {app}