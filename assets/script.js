// Setting Strings and Notes
var strings = [
  "Low E", "A", "D", "G", "B", "High E"
];
var notes = [
  // Splittin Array Lines by String, 12 notes over 6 strings
	"F","F#/Gb","G","G#/Ab","A","A#/Bb","B","C","C#/Db","D","D#/Eb","E",
  "A#/Bb","B","C","C#/Db","D","D#/Eb","E","F","F#/Gb","G","G#/Ab","A",
  "D#/Eb","E","F","F#/Gb","G","G#/Ab","A","A#/Bb","B","C","C#/Db","D",
  "G#/Ab","A","A#/Bb","B","C","C#/Db","D","D#/Eb","E","F","F#/Gb","G",
  "C","C#/Db","D","D#/Eb","E","F","F#/Gb","G","G#/Ab","A","A#/Bb","B",
  "F","F#/Gb","G","G#/Ab","A","A#/Bb","B","C","C#/Db","D","D#/Eb","E"
];

function BigParentFunction() {
  var ranNum = Math.floor(Math.random()*73);

  function getString() {
    console.log("number " + ranNum);
    console.log("this is on string #" + (Math.floor(ranNum / 12)+1) + " or the " + strings[Math.floor(ranNum / 12)] + " string");
    var newString = strings[Math.floor(ranNum / 12)];
    $('.string').html(newString + " string");
  }
  
  function getNote() {
    var newNote = notes[ranNum-1];
    $('.note').html(newNote);
    // Conditionals for flats & sharps, since they create file path errors
    if (newNote == "F#/Gb") {
      $('.sound').attr('src','assets/audio/Fsharp.mp3');
    }
    else if (newNote == "G#/Ab") {
      $('.sound').attr('src','assets/audio/Gsharp.mp3');
    }
    else if (newNote == "A#/Bb") {
      $('.sound').attr('src','assets/audio/Asharp.mp3');
    }
    else if (newNote == "C#/Db") {
      $('.sound').attr('src','assets/audio/Csharp.mp3');
    }
    else if (newNote == "D#/Eb") {
      $('.sound').attr('src','assets/audio/Dsharp.mp3');
    }
    // Major notes
    else {
      $('.sound').attr('src','assets/audio/' + newNote + '.mp3');
    }
    console.log("the note is " + newNote);
    console.log("/////////////");
  }
  function getImage() {
    $('.cheat-sheet').attr('src','assets/img/' + ranNum + '.png');
  }
 
  getString();
  getImage();
  getNote();

}

setInterval(function() {
  BigParentFunction();
}, 8000);

// Button Functions

function cheatSheet(){
  $('.cheat-toggle').toggleClass('deactivated');
  $('.cheat-sheet').toggleClass('hide');
}

function playSound () {
  $('.sound')[0].play();
}

