//array of current users
let current_users =["Farooq", "ahmed","Ali","Bilal"];

//array of new users
let new_users = ["Anamta", "Aiman", "Ahmed", "Manahil","Ali"];

//loop through new users to check for usernames avaibility
new_users.forEach(new_one_user => {
  
  //making a condition for username already exist and save in our condition variable 
    let our_condition = (current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase()))
    
    //print different messages using if-else statment
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken !`)
    }else{
        console.log(`this username ${new_one_user} is available`)        
    }
    }
)





