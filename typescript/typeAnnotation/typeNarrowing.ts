// eslint-disable-next-line consistent-return
export const addTwoNumber = (myNumber: unknown): number => {
  if (typeof myNumber === "number") {
    let theAnswer = 0;
    theAnswer = 15 + myNumber;
    return theAnswer;
  }
};
