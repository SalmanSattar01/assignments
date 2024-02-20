//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportationModes: string[] = ["Aeroplane", "Train", "Car", "motorcycle"];

transportationModes.forEach(mode => {
    switch (mode) {
        case "Aeroplane":
            console.log("I would like to travel by Aeroplane for business meetings.");
            break;
        case "Train":
            console.log("I would like to travel by Train for Pakistan Tour.");
            break;
        case "Car":
            console.log("I would like to travel by Car with my friends for a Tour.");
            break;
        case "motorcycle":
            console.log("I use motorcycle in karachi for daily transportation to avoid traffic.");
            break;
        default:
            console.log("I don't have a preference for this mode of transportation.");
            break;
    }
});
