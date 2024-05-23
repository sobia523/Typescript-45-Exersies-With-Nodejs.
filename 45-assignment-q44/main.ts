// Define a function with a rest parameter that accept items argument representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a Sandwich with the following items: \n")

    items.forEach(SingleItem => console.log(SingleItem));
    
    console.log("------------------------------------------");
    console.log("Now Enjoy Sandwich!");
}

// Call the function 3 items with 3 different number of arguments
makeSandwich("Chicken", "cheese", "Egg", "Mayo", "Tomato");

makeSandwich("Bread", "chicken" );

makeSandwich("Bread", "Chicken",  "Cheese", "Tomato", "Butter","Egg", "Mayo");