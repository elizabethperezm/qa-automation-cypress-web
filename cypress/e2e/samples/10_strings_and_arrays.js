// Strings
let greeting = "  Hello, World!  ";
console.log(greeting.length); // Output: 15
console.log(greeting.toUpperCase()); // Output: "  HELLO, WORLD!  "
console.log(greeting.trim()); // Output: "Hello, World!"
console.log(greeting.includes("World")); // Output: true
console.log(greeting.replace("World", "JavaScript")); // Output: "  Hello, JavaScript!  "

// Arrays
let numbers = [1, 2, 3, 4];
console.log(numbers.length); // Output: 4
numbers.push(5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4]
console.log(numbers.slice(1, 3)); // Output: [2, 3]
console.log(numbers.join("-")); // Output: "1-2-3-4"
