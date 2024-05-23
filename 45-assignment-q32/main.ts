// Array of Current Users
let currentUsers = ["Zoha", "zanaib", "Fatima", "Aiman", "Areeba"];

// array of New Users
let newUsers = ["Zanaib", "Zoha", "Ali", "Fatima", "Hassan"];

// Loop through New Users to cheak for usernames availbility
newUsers.forEach(newOneUser => {

        // Making a condition for username already exist in our condition avaiable
    let ourCondition = currentUsers.some(currentOneUser => currentOneUser.toLowerCase() === newOneUser.toLowerCase())

    // print different message if else satement using
    if(ourCondition){
        console.log(`Sorry ${newOneUser} is already taken!`);
    }else{
        console.log(`This Username ${newOneUser} is available.`);
    }
})