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
// Call make-great function to modify magicians names
var greatMagicians = makeGreat(magicianNames);
// Call show magicians that show modified List of Magicians
console.log(greatMagicians);
