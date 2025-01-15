// Primitive types: Copied by value
let x = 10;
let y = x; // Copy by value
y = 20;
console.log(x); // Output: 10 (original remains unchanged)
console.log(y); // Output: 20

// Objects: Copied by reference
let originalObject = { name: "Elizabeth" };
let copiedObject = originalObject; // Copy by reference
copiedObject.name = "Changed Name";
console.log(originalObject.name); // Output: Changed Name (original is affected)

// Arrays: Copied by reference
let originalArray = [1, 2, 3];
let copiedArray = originalArray; // Copy by reference
copiedArray.push(4);
console.log(originalArray); // Output: [1, 2, 3, 4] (original is affected)

// Cloning objects to avoid reference issues
let clonedObject = { ...originalObject }; // Spread operator to clone
clonedObject.name = "Independent Clone";
console.log(originalObject.name); // Output: Changed Name (original is unaffected)
console.log(clonedObject.name); // Output: Independent Clone

// Cloning arrays to avoid reference issues
let clonedArray = [...originalArray]; // Spread operator to clone
clonedArray.push(5);
console.log(originalArray); // Output: [1, 2, 3, 4] (original is unaffected)
console.log(clonedArray); // Output: [1, 2, 3, 4, 5]
