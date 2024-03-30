//creating an array
var userName = ["huzaifa", "hassaan", "mohsin", "saad"];
//using forEach loop an array 
userName.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
