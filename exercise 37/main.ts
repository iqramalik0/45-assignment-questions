//making  a function
function make_shirt (size: string = "large", printMessage: string = "my parents is my life"){
console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

//calling a function with by_defualt values
make_shirt();

//calling a function now with medium size and default message
make_shirt("medium")

//calling a function now with small size and also print different message
make_shirt("small","i love pakistan")