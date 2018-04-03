
// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

// sets the value of weapon based on the room and
// sets the value of solved to true if the value of room matches the suspect's room


// the poison belongs to the ballroom,
// the trophy belongs to the gallery,
// the pool stick belongs to the billiards room,
// and the knife belongs to the dining room.
// And we know that each suspect was located in a specific room at the time of the murder.

// Mr. Parkes was located in the dining room.
// Ms. Van Cleve was located in the gallery.
// Mrs. Sparr was located in the billiards room.
// Mr. Kalehoff was located in the ballroom.

if (room === "ballroom") {
    var solved = true;
    weapon="poison";
    
} else if (room === "gallery") {
    var solved = true;
    weapon="trophy";
    
} else if (room === "billiards room") {
    var solved = true;
    weapon="pool stick";
} else {
    var solved = true;
    weapon="knife";
}

// __________ did it in the __________ with the __________!
if (solved) {
	console.log(suspect+' did it in the '+room+' with the '+weapon+'!');
}
