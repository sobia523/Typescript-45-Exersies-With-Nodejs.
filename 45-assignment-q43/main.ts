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

// Making a Copy of Original Array through .Slice() Function
let copyMagicianNames = magicianNames.slice()

// Modify the Copied Array to include "The Great" with their names
let copyGreatMagicians = makeGreat(copyMagicianNames);

// Show Arrays orginal and Copied
// Original
console.log("\nOrginal Array\n");
showMagicians(magicianNames);

// Copied
console.log("\nCopied Array\n");
showMagicians(copyGreatMagicians);