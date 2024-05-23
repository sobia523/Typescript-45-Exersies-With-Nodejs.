// Making a Array of Countries and Print its Original Order
let countriesToVist: string[] = ["Turkey", "Canada", "SaudiaArab", "Brazil"];
console.log("Orginal Order", countriesToVist);

// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVist].sort());

// Show that the array is still in its orginal order
console.log("Still in Orginal Order:", countriesToVist);

// Print the Array in Reversed order without modified the Actual Array List
console.log("Reverse Order:", [...countriesToVist].reverse());

// Show that the array is still in its orginal order
console.log("Still in Orginal Order:", countriesToVist);

// We have change the orginal Array 
console.log("Orginal Array Reversed:", countriesToVist.reverse());

// Print the Array to show that its back to its orginal order
console.log("Back to Orginal Order:", countriesToVist.reverse());

// Print the Array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order", countriesToVist.sort());

// We have change the orginal Array order now in reverse order again
console.log("Orginal Array Reversed Again:", countriesToVist.reverse());
