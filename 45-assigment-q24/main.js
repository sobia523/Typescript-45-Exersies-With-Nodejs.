// Define Variables
var mango = "mango";
var upperCaseMango = "MANGO";
var ten = 10;
var twenty = 20;
var fruits = ["Mango", "Orange", "Apple", "Banana"];
// Test for equality and unequality with strings
console.log("Is mango is equal to mango?");
console.log(mango == "mango");
console.log("-------------------------------------");
console.log("Is mango is not eqaul to mango");
console.log(mango != "mango");
console.log("-------------------------------------");
// Tests Using Lowercase Function
console.log("Is MANGO is equal to mango after converting to lowerCase?");
console.log(upperCaseMango.toLowerCase() == "mango");
console.log("-------------------------------------");
console.log("MANGO is not equal to mango after converting to lowercase?");
console.log(upperCaseMango.toLowerCase() != "mango");
console.log("-------------------------------------");
// Numerical Tests
console.log("Is Ten is equal to Twenty?");
console.log(ten == twenty);
console.log("-----------------------------------");
console.log("Is Ten is not equal to Twenty?");
console.log(ten != twenty);
console.log("-----------------------------------");
console.log("Is Ten is greater than Zero?");
console.log(ten >= 0);
console.log("-----------------------------------");
console.log("Is Twenty is smaller than 10?");
console.log(twenty <= 10);
console.log("-----------------------------------");
// Test using 'And' & 'Or' Operators
// Using && "And"
console.log("twenty is not equal to 10 and twenty is greater tan 10");
console.log(twenty != 10 && twenty > 10);
console.log("------------------------------------");
console.log("twenty is not equal to 10 and twenty is greater tan 10");
console.log(twenty != 10 && twenty > 30);
console.log("-------------------------------------");
// Using || "OR"
console.log("20 is greater than 50 Or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("-----------------------------------");
console.log("20 is greater than 50 Or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
console.log("-----------------------------------");
// Test Whether an item is including array
console.log("Is Orange include in my Fruits Array");
console.log(fruits.includes("Orange"));
console.log("----------------------------------");
// Not Include
console.log("Orange is not include in my Fruits Array");
console.log(!fruits.includes("Orange"));
