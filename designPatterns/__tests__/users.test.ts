import { getURL } from "../users";

test("users", () => {
  const actual = getURL();

  expect(actual).toBe("https://twitter.com/@heyitsjenny");
});
