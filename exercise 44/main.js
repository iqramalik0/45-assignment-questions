//make a function
function makeSandwich(item) {
    console.log("\nMaking your sandwich with:");
    item.forEach(function (element) { return console.log("-" + element); });
    console.log(" enjoy your sandwich !\n ");
}
makeSandwich(["patty", "lettuce", "cheese"]);
makeSandwich(["pakistan", " bacon"]);
makeSandwich(["peanut butter", "jelly"]);
