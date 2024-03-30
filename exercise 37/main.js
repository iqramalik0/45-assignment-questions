//making  a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "my parents is my life"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
//calling a function with by_defualt values
make_shirt();
//calling a function now with medium size and default message
make_shirt("medium");
//calling a function now with small size and also print different message
make_shirt("small", "i love pakistan");
