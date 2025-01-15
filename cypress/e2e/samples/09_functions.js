// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression
const add = function (a, b) {
  return a + b;
};
console.log(add(3, 7)); // Output: 10

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Output: 20

// Default Parameters
function sayHello(name = "Guest") {
  return `Hi, ${name}!`;
}
console.log(sayHello()); // Output: Hi, Guest!
