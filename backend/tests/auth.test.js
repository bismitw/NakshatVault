import request from "supertest";
import {app} from "../app.js";

describe("App Health Check", () => {
    it("should return 200 for the root route", async() => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("NakshatVault backend is running");
    });
});

describe("Auth Routes", () => {
    it("should return 400 when required register fields are missing", async () => {
    const response = await request(app).post("/api/v1/auth/register").send({
        email: "test@example.com",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain("FullName, Email and Password are required");
    });
});

it("should return 400 when login fields are missing", async () => {
    const response = await request(app).post("/api/v1/auth/login").send({
    email: "test@example.com",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain("Email and password are required");
});

it("should return 401 when refresh token is missing", async () => {
    const response = await request(app).post("/api/v1/auth/refresh-token").send({});

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain("Refresh Token is required");
});
