//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList: string[] = ["Shoaib", "Shahzad", "Zeeshan"];

console.log("Original Invitations:");
guestList.forEach(person => {
    console.log(`Dear ${person},\n\nI would like to invite you to dinner at my place. It would be an honor to have you join us for an evening of delightful conversation and delicious food.\n\nPlease let me know if you're available.\n\nBest regards,\nSalman Sattar\n`);
});

let guestWhoCantMakeIt = "Zeeshan";
let newGuest = "Ali";

guestList = guestList.map(person => person === guestWhoCantMakeIt ? newGuest : person);

console.log("Updated Invitations:");
guestList.forEach(person => {
   console.log(`Dear ${person},\n\nI would like to invite you to dinner at my place. It would be an honor to have you join us for an evening of delightful conversation and delicious food.\n\nPlease let me know if you're available.\n\nBest regards,\nSalman Sattar\n`);
});
