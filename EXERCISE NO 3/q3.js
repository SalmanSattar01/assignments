//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Salman Sattar";
// Lowercase
console.log("Lowercase: ".concat(personName.toLowerCase()));
// Uppercase
console.log("Uppercase: ".concat(personName.toUpperCase()));
// Titlecase
console.log("Titlecase: ".concat(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); })));
