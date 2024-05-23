// Describe a Function
function describeCity(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// Calling the Function 
describeCity("Karachi");
describeCity("Islamabad");
describeCity("Berlin", "Germany");
