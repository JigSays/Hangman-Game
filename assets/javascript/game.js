//Constant word array
var takeout = ["chinese", "sushi", "mexican", "pizza", "burgers", "subs", "bbq", "indian", "italian", "thai", "vegan", "wings", "gyro"];

//initializes the game
var randomAnswer = takeout[Math.floor(Math.random() * takeout.length)];
var answer = randomAnswer.split[];
var clueSize = randomAnswer.length;
var gueseses = 6;
var wins =0;
var answerArray = [];
var guessArray = [];
var badArray = [];

//Creates a function to reload the game
function play() {
    var randomAnswer = takeout[Math.floor(Math.random() * takeout.length)];
    var answer = randomAnswer.split[];
    var clueSize = randomAnswer.length;
    var answerArray = [];
    var guessArray = [];
    var badArray = [];
    var gueseses = 6;

    //creates a guess field
    for(i=0; i < clueSize; i++){
        answersArray[i] = "_";
    }
    // display fresh HTML text (because old text will still display if not)
    document.getElementById("userText").innerHTML = answersArray.join(' ');
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("guessed").innerHTML = guessArray;
}



document.addEventListener("keyup", randomAnswer);

var userGuess = alert("Please pick a letter");
console.log(userGuess);