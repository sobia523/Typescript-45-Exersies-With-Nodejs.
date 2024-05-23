var guestList = ["Usman", "Asad", "Zanaib", "Jannat", "Rehan"];
var dontCome = guestList[0];
console.log(dontCome, "can not come");
guestList.splice(0, 1, "Zoha");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
