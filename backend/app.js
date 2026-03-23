    import "dotenv/config"
    import express from "express"
    import cors from "cors";
    import cookieParser from "cookie-parser";
    import helmet from "helmet"
    import compression from "compression";
    import authRouter from "./src/routes/auth.routes.js"
    import { errorHandler } from "./src/middlewares/errorHandler.middlewares.js";

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

    app.get("/", (req, res) => {
        res.status(200).json({ message: "NakshatVault backend is running" });
    });

    app.use("/api/v1/auth", authRouter)

    app.use(errorHandler);
    export {app}