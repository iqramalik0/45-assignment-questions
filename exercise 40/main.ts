//creating function to build an object to describing a music album
function make_album(artist: string , title: string , tracks?:number){
const album:{artist: string, title:string, tracks?:number} = {

    artist : artist,
title : title

}

    if(tracks!==undefined){
        album.tracks  =  tracks;
    }

return album;

}
//making three different dictionaries to represent different albums 

//no 1 album
const album1 = make_album("artist 1", "album title 1");
//print message
console.log(album1);

//no 2 album
const album2 = make_album("artist2 ", "album title 2");
//print message
console.log(album2);

//no 3 album
const  album3 = make_album("artist 3","album title 3" , 12);
//print message
console.log(album3);