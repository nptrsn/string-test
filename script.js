var notes = [
	"A","A#","B","C","C#","D","D#","E","F","F#","G","G#"
];
var strings = [
	"Low E", "A", "D", "G", "B", "E"
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
}, 2500);

function buttonClick(){
	$('.strings-button').toggleClass('active');
	$('.string').toggleClass('hide');
	$('.note').toggleClass('margin-top');
}