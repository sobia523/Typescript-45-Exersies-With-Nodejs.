// Describe a Function
function describeCity (city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}

// Calling the Function 
describeCity("Karachi");

describeCity("Islamabad");

describeCity("Berlin" , "Germany");