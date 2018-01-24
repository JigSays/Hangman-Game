//Constant word array
var takeout = ["chinese", "sushi", "mexican", "pizza", "burgers", "subs", "bbq", "indian", "italian", "thai", "vegan", "wings", "gyro"];

//initializes the game
var randomAnswer = takeout[Math.floor(Math.random() * takeout.length)];
var answer = randomAnswer.split("");
var clueSize = randomAnswer.length;
var guesseses = 6;
var wins = 0;
var answersArray = [];
var guessArray = [];
var badArray = [];

document.addEventListener("keyup", input);

console.log("cluesize:", clueSize);
console.log("answer:", answer);

    //creates a guess field
    for(i=0; i < clueSize; i++){
        answersArray[i] += " _ ";
    }
    // display fresh HTML text (because old text will still display if not)
    document.getElementById("userText").innerText = answersArray;
    document.getElementById("guesses").innerHTML = guesseses;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("guessed").innerHTML = guessArray;

var input;

     // when a key is pressed
    document.addEventListener("keyup", input);

    // on the next key entered, run the block of code
    document.onkeyup = function(input) {
    // capture the user key press (input.key) and assign it to a variable
    var userInput = prompt("Please Pick a Letter:").toLowerCase();
    
    // run through game logic based on key press
    if (input.key) {
        // if user's letter is not in the chosen word array, guesses--
        if (((word.includes(userInput)) == false) & ((badArray.includes(userInput)) == false))  {
            guesseses--;
            badArray.push(userInput);

        }
        // add letters guessed to guessArray to be published to screen
        else guessArray.push(userInput);
        // Display Letters guessed in HTML
            document.getElementById("guessed").innerHTML = guessArray;
    }
        
        // compare user's letter to the word array and if it finds
        // a match, copy the location and letter to the answers array
        for (var i = 0; i < word.length; i++) {
            if (userInput === word[i]) {
                answersArray[i] = word[i];  
             }
        }

        if (guesses === 1){
            document.getElementById("man").innerHTML ='<img src="./assets/images/man1.jpg"/>';}
        else if (guesses === 2) {
            document.getElementById("man").innerHTML = '<img src="./assets/images/man2.jpg"/>';}
        else if (guesses === 3) {
            document.getElementById("man").innerHTML = '<img src="./assets/images/man3.jpg"/>';}
        else if (guesses === 4) {
             document.getElementById("man").innerHTML = '<img src="./assets/images/man4.jpg"/>';}
        else if (guesses === 5) {
            document.getElementById("man").innerHTML = '<img src="./assets/images/man5.jpg"/>';}
        else{
            document.getElementById("man").innerHTML = '<img src="./assets/images/man6.jpg"/>';
        }

        }

        if (guesseses === 0) {
            alert("Game Over!")
            play();
        }
    

    // Setup a variable to go through the answers array and find how many letters are left 
    // to be guessed.
    var remaining_letters = answersArray.length;
    for (i = 0; i < answersArray.length; i++) {
        if (answersArray[i] !== '_') {
                remaining_letters -= 1;
            }
        }

    // If all letters guessed, display the alert
    if (remaining_letters == 0) {
            // document.getElementById("userText").innerHTML = answersArray.join("_");
            alert("YES! You guessed the word " + randomAnswer + " !!!");
            wins++;

            play();
        }
            
    // change the HTML text to reflect the newly guessed letter
    document.getElementById("userText").innerHTML = answersArray;
    // Display guesses left in HTML after every uns
    document.getElementById("guesses").innerHTML = guessesess;

// Creates a function to reload the game
    function play() {  
        var randomAnswer = takeout[Math.floor(Math.random() * takeout.length)];
        var answer = randomAnswer.split("");
        var clueSize = randomAnswer.length;
        var answerArray = [];
        var guessArray = [];
        var badArray = [];
        var guesseses = 6;
    }