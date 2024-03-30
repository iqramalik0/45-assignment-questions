//make an array of magician names
let magician : string[] =["David Blaine", "Doug Henning", "Harry potter","Harry Houdini" ];

//creat copy array
function copyArray(arr:string[]){
    return [ ...arr]
}

// creat make_great function 
function make_great ( magicianArray:string[] ){

for(let i=0; i<magicianArray.length; i++){
    magician[i] =  "the  Great" + magicianArray[i]
}
}

//creat show_magician  function
function show_magicians(magicians: string[]){
magician.forEach(element => {
console.log(element);
});  
}

const copyMagicianArray = copyArray(magician)

make_great(copyMagicianArray);

console.log("this is my original array:");
show_magicians(magician);

console.log("this is my modified copy of the array:");
show_magicians(copyMagicianArray);