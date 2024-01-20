const cMajor = ["C", "D", "em", "F", "G", "am", "bdim"]; // array of chords in a scale

const scales = {
    c: {
        major: ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
        minor: ["Cmin", "Ddim", "Eb", "Fmin", "Gmin", "Ab", "Bb"]
    },

    'c#': {
        major: ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#dim'],
        minor: ['C#', 'D#dim', 'E', 'F#m', 'G#m', 'A', 'B']
    },

    d: {
        major: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'],
        minor: ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C']
    },

    'd#': {
        major: ['D#', 'E#m', 'F##m', 'G#', 'A#', 'B#m', 'C##dim'],
        minor: ['D#m', 'E#dim', 'F#', 'G#m', 'A#m', 'B', 'C#']
    },

    e: {
        major: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
        minor: ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D']
    },

    f: {
        major: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'],
        minor: ['Fm', 'Gdim', 'Ab', 'Bbm', 'Cm', 'Db', 'Eb']
    },

    'f#': {
        major: ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#dim'],
        minor: ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E']
    },

    g: {
        major: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'],
        minor: ['Gm', 'Adim', 'Bb', 'Cm', 'Dm', 'Eb', 'F']
    },

    'g#': {
        major: ['G#', 'A#', 'B#', 'C#', 'D#', 'E#', 'F##dim'],
        minor: ['G#m', 'A#dim', 'B', 'C#m', 'D#m', 'E', 'F#']
    },

    a: {
        major: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'],
        minor: ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G']
    },

    'a#': {
        // major: ['A#', 'C', 'Dm', 'D#', 'F', 'Gm', 'Adim'],
        // minor: ['A#m', 'Cdim', 'C#', 'D#m', 'Fm', 'F#', 'G#']
    },

    b: {
        major: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim'],
        minor: ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A']
    },

    Ab: {
        major: ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'Gdim'],
        // minor: ['Abm', 'Bbdim', 'Cb', 'Dbm', 'Ebm', 'Fb', 'Gb']
    },

    Bb: {
        major: ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Adim'],
        minor: ['Bbm', 'Cdim', 'Db', 'Ebm', 'Fm', 'Gb', 'Ab']
    },

    Db: {
        major: ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'Cdim'],
        // minor: ['Bbm', 'Cdim', 'Db', 'Ebm', 'Fm', 'Gb', 'Ab']
    },

    Eb: {
        major: ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Ddim'],
        minor: ['Ebm', 'Fdim', 'Gb', 'Abm', 'Bbm', 'Cb', 'Db']
    },

    Gb: {
        major: ['Abm', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'Gdim'],
        // minor: ['Abm', 'Fdim', 'Gb', 'Abm', 'Bbm', 'Cb', 'Db']
    }


}

const progressions = [
    [1, 1, 4, 5],
    [1, 4, 6, 5],
    [1, 5, 6, 4],
    [1, 6, 2, 5],
    [1, 6, 4, 5],
    [1, 2, 5, 5],
    [1, 4, 5, 5],
    [2, 5, 1, 1],
    [1, 6, 3, 7],
    [1, 4, 5, 1],
    [6, 7, 1, 1],
    [1, 7, 6, 7],
    [1, 6, 2, 5],
    [1, 3, 4, 5],
    [1, 4, 1, 5],
    [1, 4, 2, 5]
] // array of chord progressions.

const timeSignatures = [
    '4 4', '3 4', '6 8'
]

function generator(array) {
    let newProgression = [];
    let lastNumber = 0; //this is to store last random number so that there wont be immediate repeats
    let randomNumber = Math.random() * progressions.length; //this is the random number
    let progressionArray = [];

    function randomArray() {

        if (randomNumber != lastNumber) {
            progressionArray = progressions[Math.floor(randomNumber)];
            lastNumber = randomNumber;
        } else {
            randomArray();
        }
    }

    randomArray();
    //this loads up the chord progression by creating a random integer 
    //then using that integer to call the chord progression from the progressions array
    //the conditional statement is used to make sure that the random number doesn't show up twice

    for (let i = 0; i < progressionArray.length; i++) {
        newProgression.push(array[progressionArray[i] - 1]);
    }

    //for loop that cycles through the chord progression array and prints each chord to a new array
    // I had to subtract 1 from the chord number to make it pull the right chord

    return newProgression;


}

function generate() {

    //function that runs when the button clicks it basically finds the key and scale that the user puts in
    //then inserts them into the previous function
    //in theory this could be part of the original function but I'm going to leave it like this for now

    // Check if the "Include 7th chords" checkbox is checked.
    var checkbox7Chord = document.getElementById("7-chords");
    var include7thChords = checkbox7Chord.checked;

    var key = document.getElementById("key").value; //finding key
    var scale = document.getElementById("scale").value; //finding scale

    var generatedProgression = generator(scales[key][scale]); //creating a variable that runs the function with the user input

    if (include7thChords) {
        generatedProgression = add7thChords(generatedProgression, scales[key][scale]);
    }

    // Add random time signature.
    document.getElementById('time-signature').innerHTML = timeSignatures[Math.floor(Math.random() * timeSignatures.length)];

    for (let i = 1; i < 5; i++) {

        document.getElementById("chord" + i).innerHTML = generatedProgression.shift();

        //for loop to take the first item in array and push it to correct html div
        //only loops 4 times at the moment, moving forward I want to figure out how to make a variable for longer or shorter chord progressions
    }
}

// Adds some 7th chords to a progression, including 7, maj7 
function add7thChords(chordProgression, keyScaleArray) {
    console.log("chord progression: ", chordProgression);
    console.log("keyScaleArray: ", keyScaleArray);

    // Iterate through each chord in the progression
    for (let i = 0; i < chordProgression.length; i++) {
        chordPosition = findPosition(chordProgression[i], keyScaleArray);

        var make7thChord = Math.round(Math.random()); Math.round(Math.random());

        if (make7thChord) {
            // The I and IV chord in a major progression should have "maj7" vs "dom7".
            if (!isMinorChord(chordProgression[0]) && (chordPosition === 1 || chordPosition === 4)) {
                chordProgression[i] += 'maj7';
            }
            // ToDo: Find out if same logic applies to minor chord progressions.
            // else if (isMinorChord(chordProgression[0]) && (chordPosition === 1 || chordPosition === 4)) {
            //     chordProgression[i] += 'maj7';
            // }
            else {
                chordProgression[i] += '7';
            }
        }
    }

    return chordProgression;
}

// Find which position a string/chord is in an array/sequence.
function findPosition(target, arr) {
    // Use indexOf to find the position of the target string in the array
    var position = arr.indexOf(target);

    // Return the position (adding 1 to make it 1-based instead of 0-based)
    return position + 1;
}

// Check if a chord string is a minor chord. 
// Needed to avoid labeling a minor chord as a maj7.
function isMinorChord(chord) {
    const minorPattern = 'm';
    return chord.indexOf(minorPattern) >= 0;
}