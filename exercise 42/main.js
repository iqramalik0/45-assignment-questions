//make an array of magician names
var magician = ["David Blaine", "Doug Henning", "Harry potter", "Harry Houdini"];
// creat make_great function 
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magician[i] = "the  Great" + magicianArray[i];
    }
}
//creat show_magician  function
function show_magicians(magicians) {
    magician.forEach(function (element) {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
