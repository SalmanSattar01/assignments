//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName: string = "Salman Sattar";

// Lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);

// Uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);

// Titlecase
console.log(`Titlecase: ${personName.replace(/\b\w/g, (char: string) => char.toUpperCase())}`);