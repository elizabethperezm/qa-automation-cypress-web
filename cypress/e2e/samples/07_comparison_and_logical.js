// Comparison Operators
let a = 10,
  b = "10",
  c = 20;

console.log(a == b); // true: values are equal, type is ignored
console.log(a === b); // false: values are equal, but types are different
console.log(a != c); // true: values are different
console.log(a !== b); // true: values are equal, but types are different

console.log(a > c); // false: a is less than c
console.log(a <= c); // true: a is less than or equal to c

// Logical Operators
let x = 15;

console.log(x > 10 && x < 20); // true: both conditions are true
console.log(x > 10 || x < 5); // true: at least one condition is true
console.log(!(x > 10)); // false: condition is true, but NOT reverses it
