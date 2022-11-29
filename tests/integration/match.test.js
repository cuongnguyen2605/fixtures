const request = require("supertest");
const httpStatus = require("http-status");

const app = require("../../src/app");

describe("Integration test", () => {
  describe("GET v1/matches/find", () => {
    test("should return 200 and successfully", async () => {
      await request(app).get("/matches/find").send().expect(httpStatus.OK);

      /**
       * expect(res.data).toEqual({
       *   docs: expect.any(Array),
       *   totalDocs: 0,
       *   totalPages: 0,
       * });
       */
    });
  });

  describe("GET v1/matches/find-by-dates", () => {
    test("should return 200 and successfully", async () => {
      await request(app)
        .get("/matches/find-by-dates")
        .send()
        .expect(httpStatus.OK);

      /**
       * expect(res.data).toBeType("array");
       */
    });
  });
});
