//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define interfaces for different types of items
interface CellPhone {
    brand: string;
    model: string;
}

interface Car {
    make: string;
    model: string;
    year: number;
}

interface Friends {
    childhood: string;
    new: string;
}

// Create objects containing different items
let myCellPhone: CellPhone = {
    brand: "Samsung",
    model: "A34",
};

let myCar: Car = {
    make: "Suzuki",
    model: "Mehran",
    year: 2010
};

const myFriends: Friends = {
    childhood: "Shoaib",
    new: "Zeeshan",
};

// Print out the objects
console.log("My Cell Phone:", myCellPhone);
console.log("My Car:", myCar);
console.log("My Friends:", myFriends);
