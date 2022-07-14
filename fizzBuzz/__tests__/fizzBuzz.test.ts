import { fizzBuzz } from "../fizzBuzz";

describe("fizzBuzz", () => {
  it("should return Fizz Buzz when the number % 3 = 0 & number % 5 = 0", () => {
    const actual = fizzBuzz(15);
    expect(actual).toBe("Fizz Buzz");
  });

  it("should return Fizz when the number % 3 = 0", () => {
    const actual = fizzBuzz(9);
    expect(actual).toBe("Fizz");
  });

  it("should return Buzz when the number % 5 = 0", () => {
    const actual = fizzBuzz(25);
    expect(actual).toBe("Buzz");
  });

  it("should return the number when the number % 3 != 0 & number % 5 != 0", () => {
    const actual = fizzBuzz(13);
    expect(actual).toBe(13);
  });
});
