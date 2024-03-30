var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a array of countries and print its original order
var countriestovisit = ["canada", "italy", "turkey", "kuwait"];
console.log("original order", countriestovisit);
//print the array in alphabetical order without modifying the actual array list
console.log("Alphabatical order:", __spreadArray([], countriestovisit, true).sort());
//show that the array is still in its original order
console.log("still in original order:", countriestovisit);
//print the array in reverse order without modifying the actual array list
console.log("reverse order:", __spreadArray([], countriestovisit, true).reverse());
//show that the array is still in its original order
console.log("still in original order:", countriestovisit);
//we have changed the original array order now
console.log("original array reversed:", countriestovisit.reverse());
//print the array to show that its back to its original order
console.log("back to original order:", countriestovisit.reverse());
//print the array to show that its order has been changed in alphabetical order now
console.log("sorted in alphabetical order:", countriestovisit.sort());
//we have changed the original array order now in reverse order again
console.log("original array reversed:", countriestovisit.reverse());
