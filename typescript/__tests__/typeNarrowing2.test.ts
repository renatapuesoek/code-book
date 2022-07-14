import { typeIs } from "../typeAnnotation/typeNarrowing2";

describe("type narrowing test", () => {
  it("should return the proper type of the item", () => {
    const myItem: unknown = "hello";

    expect(typeIs(myItem)).toBe("string");
  });
});
