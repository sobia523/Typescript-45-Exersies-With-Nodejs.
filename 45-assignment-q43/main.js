// Define the function name to show magicians names
function showMagicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians through .map it will modify array
function makeGreat(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an Array of magicians names
var magicianNames = ["Harry Poter", "Ali Ahmad", "Syeda Zahabia"];
// Making a Copy of Original Array through .Slice() Function
var copyMagicianNames = magicianNames.slice();
// Modify the Copied Array to include "The Great" with their names
var copyGreatMagicians = makeGreat(copyMagicianNames);
// Show Arrays orginal and Copied
// Original
console.log("\nOrginal Array\n");
showMagicians(magicianNames);
// Copied
console.log("\nCopied Array\n");
showMagicians(copyGreatMagicians);
