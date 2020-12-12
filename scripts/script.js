
let word = null;
while (word == null || word == "") {
    word = prompt("Welcome to Hangman! Player 1, please enter a word for Player 2 to guess.");
}
word = word.toUpperCase();

// note the switch toUpperCase(), we want to always work in upper case letters to avoid confusing 'a' and 'A' as unequal.

let revealedLetters = new Array(word.length);
for (i = 0; i < word.length; i++) {
    revealedLetters[i] = "_";
}

let s = revealedLetters.join(" ")
document.getElementById("emptyWord").innerHTML = s;

const maxStrikes = 6;
let strikes = 0; // the number of incorrect guesses made so far
let strikeLetters = []; // this will contain every letter that has been incorrectly guessed.

// drawWordProgress();

// Manipulates the DOM to write all the strike letters to the appropriate section in hangman.html
function drawStrikeLetters() {

    let myEle = document.getElementById("Letters");
    myEle.innerHTML = strikeLetters.join(", ");
}
function drawWordProgress() {
    let emptyWord = document.getElementById("emptyWord");
    emptyWord.innerHTML = revealedLetters.join(" ");
}

// Manipulates the DOM to update the image of the gallows for the current game state.

// your DOM manipulation code here 
// should update an <img> element in the appropriate hangman.html section to point to "images/strike-"+strikes+".png"

function drawGallows() {
    document.getElementById("gallowspictures").src = "images/strike-" + strikes + ".png";
}

function processGuess(event) {

    event.preventDefault();
    let guess = document.getElementById("guessInput").value.toUpperCase();
    if (word == guess) {
        console.log("You win")
        alert("You win")
        return;
    }
    else if (guess.length == 1) {
        let correct = false;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                revealedLetters[j] = guess;
                correct = true
                drawWordProgress();
            }
        }
        if (correct == false) {
            strikes++;
            strikeLetters.push(guess);
            if(strikes == maxStrikes){
                console.log("You lost");
                let x = word
                document.getElementById("guessInput").value;
    alert("You lost the word was  " +  word);
            }    
            drawStrikeLetters()
            drawGallows();
        }
    }
}

document.getElementById("guessforms").addEventListener("submit", processGuess);  





