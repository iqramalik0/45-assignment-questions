//define variables
var apple = "apple";
var uppercaseapple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
//test for equality and inequality with strings 
console.log("is apple is equal to apple?");
console.log(apple = "apple");
console.log("\nis apple is not equal to apple?");
console.log(apple != "apple");
//test using lowercase function
console.log("\nis APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase() == "apple");
console.log("\n is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase() != "apple");
//numericaltests
//equal to
console.log("\n is ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\n is not equal to twenty?");
console.log(ten != twenty);
//greater than
console.log("\n is ten is greater than zero?");
console.log(ten > 0);
//less than
console.log("\n is twenty is less thasn 10?");
console.log(twenty < 10);
//greater than or equal to
console.log("\nis ten is greater than or equal to5 ?");
console.log(ten >= 5);
//less than or equal to
console.log("\n twenty is less than or equal to 10?");
console.log(twenty <= 10);
//tests using "and" & "or"operators
//using && (and)
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty);
console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
//using|| (or)
console.log("\n20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n20 is grater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
//test weather an item is include in array 
console.log("is orange include in my fruit array");
console.log(fruits.includes("orange"));
//not include
console.log("\nis orange not include in my fruit array ");
console.log(!fruits.includes("orange"));
