//creating a guest list array 
let guestList =["Abdulsamad","Abdulwahab","hasnainAli","mubeen"];

//making variable for those guest who can't come
let dontCome =guestList[0];

//print the name of guest who can't come
console.log(dontCome,"nahi ah sakty hain");

//add or remove values from guest list array 
guestList.splice(0,1,"zainab");

//message print for bigger table
console.log("Good news! we have found a bigger table for dinner.");

//adding a new guest at starting index of array
guestList.unshift("hussain");

//adding a new guest at ending index of array
guestList.push( "bilquis");

// get a middle index of our guestlist  array
let middleIndex: number = Math.floor(guestList.length / 2 );

//adding a new guest to middle index of array
guestList.splice(middleIndex,0,"bilal");

//print message of updated list
console.log("updated list of our guests");

//sending a invitation message to our guests one by one with thier names
guestList.forEach(oneguest => console.log(`salam ${oneguest},would you like to dinner with me`));

//inform that only two guest can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time,so i can only invite two guests to dinner with me");

//using while -loop to remove guest from the array until only two names remain
while(guestList.length > 2) {
    let removedGuest = guestList.pop();
console.log(`sorry, ${removedGuest} i cant invite you to dinner`);
}
//sending a invitation to the last two guest on the list
console .log("invitations to the last 2 Guests");
guestList.forEach(lasttwo => console.log (`luckly ${lasttwo},you are still invited to dinner`));

//removing last two guest from the guest
guestList.pop();
guestList.pop();

console .log("empty List:",guestList);














