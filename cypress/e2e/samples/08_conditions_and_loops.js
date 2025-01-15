// If-Else Example
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// For Loop Example
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

// While Loop Example
let count = 0;
while (count < 3) {
  console.log(`Count: ${count}`);
  count++;
}

// For...of Loop Example
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}

// For...in Loop Example
let person = { name: "John", age: 30 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
