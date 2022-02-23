import request from "supertest";
import app from "../src/app";

describe("GET /ping", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/ping").send();
    expect(response.statusCode).toBe(200);
  });
})


describe("GET /tasks", () => {

  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond an array", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.body).toBeInstanceOf(Array);
  });

})


describe("POST /tasks", () => {

    // should respond with a 200 code
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/tasks").send();
      expect(response.statusCode).toBe(200);
    });
    
    // should respond a json as a content type
    
    // shoud respond with a json object containing the new task with an id

});

