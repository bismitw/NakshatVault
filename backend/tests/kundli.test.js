import request from "supertest";
import { app } from "../app.js";

describe("Kundli Routes", () => {
    it("should return 401 when creating kundli without token", async () => {
    const response = await request(app).post("/api/v1/kundli").send({
        dateOfBirth: "2000-01-15",
        timeOfBirth: "08:30 AM",
        placeOfBirth: "Kathmandu, Nepal",
    });

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    });
});
