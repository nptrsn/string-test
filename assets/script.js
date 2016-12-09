// Setting Strings and Notes
var strings = [
  "Low E", "A", "D", "G", "B", "E"
];
var notes = [
	"A","A#","Bb", "B","C","C#","Db","D","D#","Eb","E","F","F#","Gb","G","G#","Ab"
];

function BigParentFunction() {
  var ranNum = Math.floor(Math.random()*73);
  function getNote() {
    var newNote = notes[Math.floor(ranNum / notes.length)];
    $('.note').html(newNote);
  }
  function getString() {
    var newString = strings[Math.floor(ranNum / strings.length)];
    $('.string').html(newString + " string");
  }
  function getImage() {
    $('.cheat-sheet').attr('src','assets/img/' + ranNum + '.png');
  }
  getNote();
  getString();
  getImage();
}



// var theNote = notes[randomValue * notes.length];
// console.log(theNote);

//   $('.note').html(theNote);

  
// function getString() {
//   var theString = strings[randomValue * strings.length];
//   $('.string').html(theString + " String");
// }


setInterval(function() {
  BigParentFunction();

}, 5000);


// Button Functions
function buttonClick(){
	$('.strings-button').toggleClass('active');
	$('.string').toggleClass('hide');
	$('.note').toggleClass('margin');
}

function cheatSheet(){
  $('.cheat-toggle').toggleClass('deactivated');
  $('.cheat-sheet').toggleClass('hide');
}

// Note Sounds //

function playVid() { 
    $('.sound')[0].play(); 
} 
