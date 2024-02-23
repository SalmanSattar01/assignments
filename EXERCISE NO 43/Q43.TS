//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let modified_magicians: string[] = [];
    for (let magician of magicians) {
        modified_magicians.push("the Great " + magician);
    }
    return modified_magicians;
}

// Define an array of magician's names
let magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the make_great function with a copy of the magician_names array
let great_magicians: string[] = make_great([...magician_names]); // Using spread operator to create a copy

// Call the show_magicians function to show the original array of magician names
console.log("Original Magicians:");
show_magicians(magician_names);

console.log("\n");

// Call the show_magicians function to show the array with "the Great" added to each magician's name
console.log("Great Magicians:");
show_magicians(great_magicians);
