import { Animal } from "../createObject";

test("return the right properties of the object", () => {
  const leo = new Animal("Leo", 7);
  expect(leo.hasOwnProperty("name")).toBe(true);

  expect(leo.hasOwnProperty("sleep")).toBe(false);
});
