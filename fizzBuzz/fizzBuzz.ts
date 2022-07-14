export const fizzBuzz = (myNumber: number): number | string => {
  if (myNumber % 5 === 0 && myNumber % 3 === 0) {
    return "Fizz Buzz";
  }
  if (myNumber % 3 === 0) {
    return "Fizz";
  }
  if (myNumber % 5 === 0) {
    return "Buzz";
  }
  return myNumber;
};
