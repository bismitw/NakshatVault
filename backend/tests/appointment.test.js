import request from "supertest";
import { app } from "../app.js";

describe("Appointment Routes", () => {
    it("should return 401 when creating appointment without token", async () => {
    const response = await request(app).post("/api/v1/appointments").send({
        expertName: "Pandit Sharma",
        date: "2026-04-10",
        timeSlot: "10:00 AM - 10:30 AM",
    });

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    });


it("should return 401 when updating appointment status without token", async () => {
    const response = await request(app)
    .patch("/api/v1/appointments/test-id/status")
    .send({ status: "Approved" });

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
});
});