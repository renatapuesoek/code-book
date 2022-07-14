// any
// One place any is used is with network calls,
// since you can't know what type the network call will return without adding an annotation.

async function getFruitList() {
  const response = await fetch("https://example.com/fruit");
  const fruitList = await response.json(); // const fruitList: any;
}

// unknown: is the type safe version of any
// you can't do anything with unknown except pass it around

const unknownString: unknown = "What am I?";
// @ts-ignore
const stringValue: string = unknownString; // Type Error: Type 'unknown' is not assignable to type 'string'.

const unknownNum: unknown = 27;
// @ts-ignore
const theAnsw = 15 + unknownNum; // Type Error: Operator '+' cannot be applied to types 'number' and 'unknown'.

// type narrowing
const unknownNumber: unknown = 27;

let theAnswer = 0;
if (typeof unknownNumber === "number") {
  theAnswer = 15 + unknownNumber;
}
