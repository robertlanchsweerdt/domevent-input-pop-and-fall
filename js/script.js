const userInput = document.getElementById('user');
let userOutput = document.getElementById('userOutput');
const btn = document.querySelector('.btn-submit');

userInput.addEventListener('input', runMe);
btn.addEventListener('click', clearField);

function runMe() {
  const message = userInput.value;
  userOutput.textContent = message;

  console.log(message);
}

function clearField() {
  userInput.value = '';
  userOutput.textContent = '';
}
