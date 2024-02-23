//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.

let users: string[] = ["admin", "Salman", "Aasma", "Eshaal", "Muhammad Naveed"];

// Add an if test to check if the list of users is not empty
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the array and print a greeting to each user
    for (let user of users) {
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello " + user + ", thank you for logging in again.");
        }
    }
}

// Remove all of the usernames from the array
users = [];

// Check again if the list of users is empty and print the message accordingly
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the array and print a greeting to each user
    for (let user of users) {
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello " + user + ", thank you for logging in again.");
        }
    }
}
