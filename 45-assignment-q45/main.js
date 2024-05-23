// Define a function to create a car object with optional options.
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // additional option to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the function to create a car object
var myCar = createCar("Toyota", "Corrolla", "Color: Black", "Sunroof: True", "year: 2020");
// print the variable to ensure to the information stored in the car object
console.log(myCar);
