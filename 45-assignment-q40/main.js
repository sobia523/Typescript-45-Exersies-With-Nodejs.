// Define the makeAlbum function 
function makeAlbum(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating 3 variables with different values 
var album1 = makeAlbum("Syeda Sobia", "Album title 1");
var album2 = makeAlbum("Zanaib", "Album title 2");
// Calling a make album function with third parameter
var album3 = makeAlbum("Ahmad", "Album tiltle 3", 20);
// Print values of our object created by function
// Printing the variables
console.log(album1);
console.log(album2);
console.log(album3);
