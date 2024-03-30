//creating an array
let userName = ["huzaifa","hassaan","mohsin","saad"];

//using forEach loop an array 
userName.forEach(oneUser => {
    if(oneUser === "admin"){
console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})