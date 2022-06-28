import { greet } from "../example";

test("example", () => {
  const actual = greet();

  expect(actual).toBe("Hello world!");
});
