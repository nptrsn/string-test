var notes = [
	"A","A#","Bb", "B","C","C#","Db","D","D#","Eb","E","F","F#","Gb","G","G#","Ab"
];
var strings = [
	"Low E", "A"
  // , "D", "G", "B", "E"
];

function getNote() {
   var theNote = notes[Math.floor(Math.random() * notes.length)];
   $('.note').html(theNote);
}

function getString() {
	var theString = strings[Math.floor(Math.random() * strings.length)];
	$('.string').html(theString);
}

setInterval(function() {
  getNote();
  getString();
}, 6000);

function buttonClick(){
	$('.strings-button').toggleClass('active');
	$('.string').toggleClass('hide');
	$('.note').toggleClass('margin');
}

function cheatSheet(){
  $('.cheat-toggle').toggleClass('deactivated');
  $('.cheat-sheet').toggleClass('hide');
}