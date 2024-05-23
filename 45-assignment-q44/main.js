// Define a function with a rest parameter that accept items argument representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwich with the following items: \n");
    items.forEach(function (SingleItem) { return console.log(SingleItem); });
    console.log("------------------------------------------");
    console.log("Now Enjoy Sandwich!");
}
// Call the function 3 items with 3 different number of arguments
makeSandwich("Chicken", "cheese", "Egg", "Mayo", "Tomato");
makeSandwich("Bread", "chicken");
makeSandwich("Bread", "Chicken", "Cheese", "Tomato", "Butter", "Egg", "Mayo");
