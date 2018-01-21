var takeout = ["chinese", "sushi", "mexican", "pizza", "burgers", "subs", "bbq", "indian", "italian", "thai", "vegan", "wings", "gyro"];

var randomAnswer = takeout[Math.floor(Math.random() * takeout.length)];

var clueSize = randomAnswer.length;


for(i=0; i<clueSize; i++){
    document.write("_");
}

document.addEventListener("keyup", randomAnswer);

var userGuess = alert("Please pick a letter");
console.log(userGuess);