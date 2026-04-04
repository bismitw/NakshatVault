import ratelimit from "express-rate-limit"

const authRateLimiter = ratelimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
    success: false,
    message: "Too many auth requests, please try again later",
    errors: [],
    data: null,
    },
})

export {authRateLimiter}