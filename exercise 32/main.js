//array of current users
var current_users = ["Farooq", "ahmed", "Ali", "Bilal"];
//array of new users
var new_users = ["Anamta", "Aiman", "Ahmed", "Manahil", "Ali"];
//loop through new users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    //making a condition for username already exist and save in our condition variable 
    var our_condition = (current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); }));
    //print different messages using if-else statment
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken !"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
