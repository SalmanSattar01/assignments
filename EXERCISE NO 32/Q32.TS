//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ["salman", "shoaib", "Ali", "shahzad", "zeeshan"];
let new_users: string[] = ["zahid", "ALI", "rameez", "shahzad", "rehan"];

for (let new_user of new_users) {
    let usernameExists = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    if (usernameExists) {
        console.log("Sorry, " + new_user + " is already taken. Please enter a new username.");
    } else {
        console.log("Congratulations, " + new_user + " is available!");
        current_users.push(new_user.toLowerCase()); // Add new username to current_users (ensure lowercase)
    }
}

// For demonstration, you can print current_users to see the updated list including new usernames
console.log("Updated current_users list:", current_users);
