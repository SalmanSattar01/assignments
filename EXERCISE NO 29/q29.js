//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Define an array of favorite fruits
var favorite_fruits = ["banana", "orange", "mango"];
// Check for specific fruits in the array using if statements
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
else {
    console.log("Bananas are not one of your favorite fruits.");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
else {
    console.log("Apples are not one of your favorite fruits.");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}
else {
    console.log("Mangoes are not one of your favorite fruits.");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
else {
    console.log("Oranges are not one of your favorite fruits.");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
else {
    console.log("Strawberries are not one of your favorite fruits.");
}
