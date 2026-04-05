import request from "supertest";
import { app } from "../app.js";

describe("App Routes", () => {
    it("should return JSON 404 response for unknown routes", async () => {
    const response = await request(app).get("/api/v1/unknown-route");

    expect(response.statusCode).toBe(404);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain("Route not found");
    });
});
