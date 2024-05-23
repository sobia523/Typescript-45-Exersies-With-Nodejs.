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
// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests with me.");
// Using While-loop to remove guests from the Array untill only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant Invite you to dinner"));
}
// Sending a Invitations to the last two guest on the list
console.log("Invitations to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two Guest From the List
guestList.pop();
guestList.pop();
console.log("Empty List", guestList);
