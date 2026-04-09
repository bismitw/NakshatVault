const requiredEnvVars = [
    "MONGODB_URI",
    "CORS_ORIGIN",
    "ACCESS_TOKEN_SECRET",
    "ACCESS_TOKEN_EXPIRY",
    "REFRESH_TOKEN_SECRET",
    "REFRESH_TOKEN_EXPIRY",
    "RESEND_API_KEY",
    "EMAIL_FROM",
    "ADMIN_EMAIL",
];

const validateEnv = () => {
    const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar],
    );

    if (missingEnvVars.length > 0) {
    throw new Error(
        `Missing required environment variables: ${missingEnvVars.join(", ")}`,
    );
    }
};

export { validateEnv };