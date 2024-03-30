//make an array of magician names
var magician = ["David Blaine", "Doug Henning", "Harry potter", "Harry Houdini"];
//make a function
function show_magicians(magicians) {
    magician.forEach(function (element) {
        //print message
        console.log(element);
    });
}
show_magicians(magician);
