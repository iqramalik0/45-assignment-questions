let guestList = ["bilal","hamza","raza","tahir"];

let dontCome = guestList[0];

console.log(dontCome,"nahi ah sakta");

guestList.splice(0,1,"talha");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));
