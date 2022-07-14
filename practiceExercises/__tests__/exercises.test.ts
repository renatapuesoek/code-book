import {
  isEqualTo100,
  getFileExtension,
  replaceChar,
  formatDate,
  addNew,
} from "../exercises";

test("return true if one of the number is 100 or the sum of the two number is 100", () => {
  const num1 = 100;
  const num2 = 50;

  expect(isEqualTo100(num1, num2)).toBe(true);
});

test("return the extension of the file", () => {
  const name = "webpack.config.js";

  expect(getFileExtension(name)).toBe(".js");
});

test("replace every character in a given string with the character following it in the alphabet", () => {
  const str = "abcd";

  expect(replaceChar(str)).toBe("bcde");
});

test("get the current date with the expected format", () => {
  expect(formatDate()).toBe("3/7/2022");
});

test("add New! in front of a given string, if it didn't already exist", () => {
  expect(addNew("Offers")).toBe("New! Offers");
});
