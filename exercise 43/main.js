var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//make an array of magician names
var magician = ["David Blaine", "Doug Henning", "Harry potter", "Harry Houdini"];
//creat copy array
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
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
var copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log("this is my original array:");
show_magicians(magician);
console.log("this is my modified copy of the array:");
show_magicians(copyMagicianArray);
