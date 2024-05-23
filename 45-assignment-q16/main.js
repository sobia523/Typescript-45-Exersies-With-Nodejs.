// Creating a guestList Array
var guestList = ["Usman", "Asad", "Zanaib", "Rehan", "Jannat", "Fatima"];
// Making Variable for guest cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "Can Not Come");
// Add or Remove values from Guest List Array
guestList.splice(0, 1, "Zoha");
// // message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Adding a new value at Starting index of Array
guestList.unshift("Ali");
// Adding a new value at ending index of Array
guestList.push("Aqsa");
// Get a middle index of our guest list Array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Sana");
// Print Message of Updated List
console.log("Updated List of Our Guests");
// Sending a invitation message to our guests one by one with thier names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me ")); });
