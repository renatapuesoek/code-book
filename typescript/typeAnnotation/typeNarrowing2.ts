export const typeIs = (myParameter: unknown): string => {
  if (typeof myParameter === "number") {
    return "number";
  }
  if (typeof myParameter === "string") {
    return "string";
  }
  if (typeof myParameter === "boolean") {
    return "boolean";
  }
  return "unknown";
};
