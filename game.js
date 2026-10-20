// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
const resultDiv = document.getElementById('result');
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');

submitGuess.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value, 10);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    resultDiv.textContent = 'Please enter a valid number between 1 and 100.';
    resultDiv.style.color = 'red';
  } else if (userGuess === randomNumber) {
    resultDiv.textContent = '🎉 Congratulations! You guessed the correct number!';
    resultDiv.style.color = 'green';
  } else if (userGuess < randomNumber) {
    resultDiv.textContent = 'Too low! Try again.';
    resultDiv.style.color = 'orange';
  } else {
    resultDiv.textContent = 'Too high! Try again.';
    resultDiv.style.color = 'orange';
  }

  guessInput.value = '';
});