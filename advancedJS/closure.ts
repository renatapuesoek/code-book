// In JavaScript, a closure is a function that references variables in the outer scope from its inner scope.
// The closure preserves the outer scope inside its inner scope.

// example 1:
export function greeting(message) {
  return function (name) {
    return `${message} ${name}`;
  };
}

// The sayHi() and sayHello() are closures. They share the same function body but store different scopes.
