test("Checks if tests are working", () => {
  const str = "";

  expect(str).toBeDefined();
});

const { sum } = require("./module");
test("checks if module import is working", () => {
  expect(sum(1, 5)).toEqual(6);
});