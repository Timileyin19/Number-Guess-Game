/**
 * Guess the Number Game
 * TODO: 
 */

 // Variable to store the list of guesses 


 // variable to store the correct random number
 let correctNumber = getRandomNumber();
 console.log(correctNumber);

 window.onload = function() {
     document.getElementById('number-submit').addEventListener('click', playGame);
     document.getElementById('restart-game').addEventListener('click', initGame);
 }


 
 /**
  * Functionality to Playing the Game
  */
 function playGame() {
     let numberGuess = document.getElementById('number-guess').value;
    let result = displayResult(numberGuess);

 }

 function displayResult(numberGuess) {
    if (numberGuess > correctNumber) 
        showNumberAbove();
    else if (numberGuess < correctNumber)
        showNumberBelow();
    else 
        showYouWon();

 }

 function initGame() {

}

function resetResultContent() {

}

function getDialog(dialogType, text) {
    let dialog;
    switch(dialogType) {
        case "warning": 
            dialog = "<div class='alert alert-warning' role='alert'>";
            break;
        case "won": 
            dialog = "<div class='alert alert-success' role='alert'>";
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

function getRandomNumber() {
    let randomNumber = Math.floor((Math.random() * 100) + 1 );
    return randomNumber;

}

function showYouWon() {
    const text = 'Nice Job, you get it Right';

    let dialog = getDialog('won', text);

    document.getElementById('result').innerHTML = dialog;
    
}

function showNumberAbove() {
    const text = 'Your Guess is too high';

    let dialog = getDialog('warning', text);

    document.getElementById('result').innerHTML = dialog;
    
}

function showNumberBelow() {
    const text = 'Your Guess is too low';

    let dialog = getDialog('warning', text);

    document.getElementById('result').innerHTML = dialog;
    
}

function saveGuessHistory() {

}

 