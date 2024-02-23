//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You've ordered a ${size} shirt with the message: "${message}".`);
}

// Call the function with default values
make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message

// Call the function with different values
make_shirt("small", "Hello, World!"); // Small shirt with a custom message
