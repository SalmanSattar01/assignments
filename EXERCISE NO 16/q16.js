//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList = ["Shoaib", "Shahzad", "Zeeshan"];
console.log("Original Invitations:");
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nI would like to invite you to dinner at my place. It would be an honor to have you join us for an evening of delightful conversation and delicious food.\n\nPlease let me know if you're available.\n\nBest regards,\nSalman Sattar\n"));
});
var guestWhoCantMakeIt = "Zeeshan";
var newGuest = "Ali";
guestList = guestList.map(function (person) { return person === guestWhoCantMakeIt ? newGuest : person; });
console.log("Updated Invitations:");
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nI would like to invite you to dinner at my place. It would be an honor to have you join us for an evening of delightful conversation and delicious food.\n\nPlease let me know if you're available.\n\nBest regards,\nSalman Sattar\n"));
});
console.log("Good news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
guestList.unshift("Zahid");
// Add one new guest to the middle of the array
var newMiddleIndex = Math.floor(guestList.length / 2);
guestList.splice(newMiddleIndex, 0, "Rehan");
// Use push() to add one new guest to the end of the array
guestList.push("Rameez");
// Print a new set of invitation messages
console.log("Updated Invitations:");
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nI would like to invite you to dinner at my place. It would be an honor to have you join us for an evening of delightful conversation and delicious food.\n\nPlease let me know if you're available.\n\nBest regards,\nSalman Sattar\n"));
});
