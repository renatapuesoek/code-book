import { greeting } from "../closure";

describe("closure", () => {
  it("should ", () => {
    const sayHi = greeting("Hi");
    const sayHello = greeting("Hello");

    const hi = sayHi("John"); // Hi John
    const hello = sayHello("John"); // Hello John

    console.log("welcome");

    expect(hi).toBe("Hi John");
    expect(hello).toBe("Hello John");
  });
});
