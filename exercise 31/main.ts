let userNames = ["huzaifa", " ali","ubaid", "ahmedraza", "bilal"]

userNames = []

if(userNames.length === 0){
console.log("your array is empty we need to find some users!")
}else{
    //using forEach loop an array 
userNames.forEach(oneUser => {
    if(oneUser === "admin"){
console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
}

