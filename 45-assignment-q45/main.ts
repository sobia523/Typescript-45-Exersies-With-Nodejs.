// Define a function to create a car object with optional options.
function createCar(manufacturer, model, ...options){
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // additional option to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car [key.trim()] = value.trim();
    });


    return car;

}

// Call the function to create a car object
let myCar = createCar("Toyota", "Corrolla", "Color: Black", "Sunroof: True", "year: 2020");

// print the variable to ensure to the information stored in the car object
console.log(myCar);