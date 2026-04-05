import request from "supertest";
import {app} from "../app.js";

describe("App Health Check", () => {
    it("should return 200 for the root route", async() => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("NakshatVault backend is running");
    });
});