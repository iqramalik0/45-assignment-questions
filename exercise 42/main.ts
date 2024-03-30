//make an array of magician names
let magician : string[] =["David Blaine", "Doug Henning", "Harry potter","Harry Houdini" ];


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

make_great(magician);
show_magicians(magician);