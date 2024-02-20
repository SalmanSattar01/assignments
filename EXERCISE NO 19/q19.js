//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
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
// Inform people about the smaller dinner table
console.log("Unfortunately, our new dinner table won't arrive in time for the dinner, and we can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", but due to unforeseen circumstances, we can't accommodate you for dinner."));
}
// Print invitations to the two remaining guests
console.log("Invitations to the remaining guests:");
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nI would like to invite you to dinner at my place. It would be an honor to have you join us for an evening of delightful conversation and delicious food.\n\nPlease let me know if you're available.\n\nBest regards,\nSalman Sattar\n"));
});
// Print the number of people you are inviting to dinner
console.log("You are inviting ".concat(guestList.length, " people to dinner."));
