//creating function to build an object to describing a music album
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//making three different dictionaries to represent different albums 
//no 1 album
var album1 = make_album("artist 1", "album title 1");
//print message
console.log(album1);
//no 2 album
var album2 = make_album("artist2 ", "album title 2");
//print message
console.log(album2);
//no 3 album
var album3 = make_album("artist 3", "album title 3", 12);
//print message
console.log(album3);
