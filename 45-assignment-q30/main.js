// Creating a Array
var userNames = ["Asad", "Abbas", "Ahmad", "Ali", "Hassan"];
// Using ForEach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Ahmad") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
