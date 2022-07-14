import { Person, Person2 } from "../binding";

test("return the name property of the object", () => {
  const jim = Person("Jim", 42);

  expect(jim.sayName()).toBe("Jim");
});

test("person2 test", () => {
  const jim = new Person2("Jim", 42);

  expect(jim.sayName()).toBe("Jim");
});
