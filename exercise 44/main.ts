//make a function
function makeSandwich (item: string[]){
    console.log("\nMaking your sandwich with:");

    item.forEach(element => console.log("-" + element));
    console.log(" enjoy your sandwich !\n ");
    }

makeSandwich(["patty", "lettuce", "cheese"]);

makeSandwich(["pakistan", " bacon"]);

makeSandwich(["peanut butter", "jelly"])

