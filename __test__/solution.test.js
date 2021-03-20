import { solution } from "../src/solution.js";

describe("init test", () => {
  test("init1 test", () => {
    expect(solution()).toBe("test");
  });
  test("init2 test", () => {
    expect(solution()).toBe("test");
  });
});

describe("second test", () => {
  test("second test1", () => {
    expect(typeof solution()).toBe("string");
  });
});
