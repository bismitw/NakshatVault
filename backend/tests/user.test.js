import request from  "supertest";
import {app} from "../app.js";

describe("User Routes", () => {
    it("should return 401 when fetching profile without token", async () => {
        const response = await request(app).get("/api/v1/users/profile");

        expect(response.statusCode).toBe(401);
        expect(response.body.success).toBe(false);
    })
})