var guestList = ["bilal", "hamza", "raza", "tahir"];
var dontCome = guestList[0];
console.log(dontCome, "nahi ah sakta");
guestList.splice(0, 1, "talha");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
