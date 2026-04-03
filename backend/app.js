    import "dotenv/config"
    import express from "express"
    import cors from "cors";
    import cookieParser from "cookie-parser";
    import helmet from "helmet"
    import compression from "compression";
    import authRouter from "./src/routes/auth.routes.js"
    import userRouter from "./src/routes/user.routes.js"
    import kundliRouter from "./src/routes/kundli.routes.js"
    import appointmentRouter from "./src/routes/appointment.routes.js"
    import { errorHandler } from "./src/middlewares/errorHandler.middlewares.js";
    import { notFoundHandler } from "./src/middlewares/notFound.middlewares.js";

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
    
    //Auth Route
    app.use("/api/v1/auth", authRouter)

    //User Route
    app.use("/api/v1/users", userRouter)

    //kundli Route
    app.use("/api/v1/kundli", kundliRouter)

    //Appointment Route
    app.use("/api/v1/appointments", appointmentRouter)

    //notFound handler
    app.use(notFoundHandler)

    app.use(errorHandler);
    export {app}