// Morning Challenge
// Build a Complex Object
// Find an item, possibly from the break room, and build an object in code. Challenge yourself to add a property of each data type, and then create a string to describe the object accessing each of those properties.

let coffeCup = {
    name: "cup",
    color: 'white',
    full: false,
    hot: true,
    ounces: 12,
    fluid: ["OJ", "Milk", "Water", "Coffee"]
}
if (coffeCup.full) {

    return console.log("The " + coffeCup.color + " " + coffeCup.name + " is " + coffeCup.ounces + " oz. ")
} else {
    return console.log("The " + coffeCup.color + " " + coffeCup.name + " is " + coffeCup.ounces + " oz but not full.")
    
}

