let guestList = ["Usman", "Asad", "Zanaib", "Jannat", "Rehan"];

let dontCome = guestList[0];

console.log(dontCome, "can not come");

guestList.splice(0, 1, "Zoha");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));