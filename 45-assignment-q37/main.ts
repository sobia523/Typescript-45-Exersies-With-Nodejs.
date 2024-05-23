// Making a function 
function makeShirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}

// Calling a Function With by Defualt values
makeShirt();

// Calling a function with Medium size shirt and default message
makeShirt("Medium");

// Calling a function now with small size and different print message
makeShirt("Small", "I Love JavaScript");