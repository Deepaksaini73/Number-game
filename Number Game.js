
let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum)

let numberInput = document.getElementById("number");
let hint = document.getElementById("hint");
let score = document.getElementById("score");


let count = 0;


function checkGuess() {
  let userValue = parseInt(numberInput.value);
  
  if (userValue === randomNum) {
    score.innerHTML = "Congratulations! You won in " + count + " tries.<br> Your score is " + "<span>"+ (100 - count) +
    "</span>";
    numberInput.disabled = true;
    document.getElementById("checkButton").disabled = true;
  }
  else {
    let hintItem = (userValue > randomNum ? "greater than" : "less than");
    hint.innerHTML = "Your number is " + hintItem + " then random number.";count++;
    userValue=null;
  }
}
