import { addTwoNumber } from "../typeAnnotation/typeNarrowing";

describe("type narrowing", () => {
  it("should return the sum of two numbers ", () => {
    const unknownNumber: unknown = 10;
    expect(addTwoNumber(unknownNumber)).toBe(25);
  });
});
