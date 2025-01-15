// Example: var, let, and const

// Using var (Function-scoped)
function greetVar() {
  var greeting = "Hello from var!";
  console.log(greeting); // Output: Hello from var!
}
greetVar();
// console.log(greeting); // Error: greeting is not defined (outside the function scope)

// Using let (Block-scoped)
if (true) {
  let blockScoped = "Hello from let!";
  console.log(blockScoped); // Output: Hello from let!
}
// console.log(blockScoped); // Error: blockScoped is not defined

// Using const
const fixedValue = "This value won't change!";
console.log(fixedValue); // Output: This value won't change!
// fixedValue = "Try changing me!"; // Error: Assignment to constant variable
