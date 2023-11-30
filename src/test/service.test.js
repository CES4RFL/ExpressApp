import request from "supertest";
import app from '../controller/service.js'


describe("POST /operation", () => {
  describe("given a username and password", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/operation").send({
        n1: 1,
        n2: 2
      })
      expect(response.statusCode).toBe(400)
    })

    test("should respond opration result ok", async () => {
      const response = await request(app).post("/operation").send({
        n1: 1,
        n2: 2
      })
      expect(response.body.result).toBe(3)
    })
  })
})
