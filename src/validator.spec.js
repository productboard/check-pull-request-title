const { isValid } = require("./validator");

it("FA is valid because it starts with F", () => {
  expect(isValid({ pattern: "F", title: "FA" })).toBe(true);
});

it("FEP-123: Message is valid because it starts with 'FEP-123: '", () => {
  expect(
    isValid({ pattern: "^[A-Z-0-9]{3,}-\\d*: ", title: "FEP-123: swag" })
  ).toBe(true);
});
