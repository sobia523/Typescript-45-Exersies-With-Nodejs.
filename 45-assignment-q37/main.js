// Making a function 
function makeShirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
// Calling a Function With by Defualt values
makeShirt();
// Calling a function with Medium size shirt and default message
makeShirt("Medium");
// Calling a function now with small size and different print message
makeShirt("Small", "I Love JavaScript");
