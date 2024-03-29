let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Derniers nombres choisis: ';
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber) {
      lastResult.textContent = 'Felicitations, tu as gagné!';
      lastResult.style.backgroundColor = 'red';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!PERDU!!!';
      lowOrHi.textContent = '';
      setGameOver();
    } else {
      lastResult.textContent = 'Désolé!';
      lastResult.style.backgroundColor = 'purple';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Le dernier nombre choisi est trop petit!' ;
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Le dernier nombre choisi est trop grand!';
      }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }
  guessSubmit.addEventListener('click', checkGuess);
  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Rejouer';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }
  function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}