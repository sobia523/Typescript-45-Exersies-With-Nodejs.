// Array of Current Users
var currentUsers = ["Zoha", "zanaib", "Fatima", "Aiman", "Areeba"];
// array of New Users
var newUsers = ["Zanaib", "Zoha", "Ali", "Fatima", "Hassan"];
// Loop through New Users to cheak for usernames availbility
newUsers.forEach(function (newOneUser) {
    // Making a condition for username already exist in our condition avaiable
    var ourCondition = currentUsers.some(function (currentOneUser) { return currentOneUser.toLowerCase() === newOneUser.toLowerCase(); });
    // print different message if else satement using
    if (ourCondition) {
        console.log("Sorry ".concat(newOneUser, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(newOneUser, " is available."));
    }
});
