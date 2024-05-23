// Define the function name to show magicians names
function showMagicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magicians through .map it will modify array
function makeGreat(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an Array of magicians names
let magicianNames = ["Harry Poter", "Ali Ahmad", "Syeda Zahabia"];

// Call make-great function to modify magicians names
let greatMagicians = makeGreat(magicianNames);

// Call show magicians that show modified List of Magicians
console.log(greatMagicians);