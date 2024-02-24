//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["salman", "shoaib", "Ali", "shahzad", "zeeshan"];
var new_users = ["zahid", "ALI", "rameez", "shahzad", "rehan"];
var _loop_1 = function (new_user) {
    var usernameExists = current_users.some(function (user) { return user.toLowerCase() === new_user.toLowerCase(); });
    if (usernameExists) {
        console.log("Sorry, " + new_user + " is already taken. Please enter a new username.");
    }
    else {
        console.log("Congratulations, " + new_user + " is available!");
        current_users.push(new_user.toLowerCase()); // Add new username to current_users (ensure lowercase)
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
// For demonstration, you can print current_users to see the updated list including new usernames
console.log("Updated current_users list:", current_users);
