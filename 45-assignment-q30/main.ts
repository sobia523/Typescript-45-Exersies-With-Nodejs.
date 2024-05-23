// Creating a Array
let userNames = ["Asad", "Abbas", "Ahmad", "Ali", "Hassan"];

// Using ForEach Loop on Array

userNames.forEach(oneUser =>{
    if(oneUser === "Ahmad"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
})