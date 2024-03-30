//creating an array
var pizza = ["pepperoni pizza", " bbq chicken pizza", "buffalo pizza", "fajita pizza"];
//using for loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onepizza = pizza_1[_i];
    console.log("i like ".concat(onepizza, " pizza"));
}
//print a message outside of the for - loop
console.log("pizza is love");
