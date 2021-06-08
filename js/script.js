const userInput = document.getElementById('user');
let userOutput = document.getElementById('userOutput');
const btn = document.querySelector('.btn-submit');

userInput.addEventListener('input', runMe);

btn.addEventListener('click', () => {
  clearField();
  rainHearts();
});

function runMe() {
  const message = userInput.value;
  userOutput.textContent = message;
}

function clearField() {
  userInput.value = '';
  userOutput.textContent = '';
}

function createHearts() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';

  document.body.appendChild(heart);
}

function rainHearts() {
  const runInterval = setInterval(createHearts, 300);
  setTimeout(() => {
    clearInterval(runInterval);
  }, 5000);
}
