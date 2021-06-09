const userInput = document.getElementById('user');
let userOutput = document.getElementById('userOutput');
const btn = document.querySelector('.btn-submit');
let hearts;

userInput.addEventListener('input', runMe);

btn.addEventListener('click', rain);

function runMe() {
  const message = userInput.value;
  userOutput.textContent = message;
}

function clearField() {
  userInput.value = '';
  userOutput.textContent = '';
}

function createRain() {
  const foo = document.createElement('div');
  foo.classList.add('heart');

  foo.style.left = Math.random() * 100 + '%';
  foo.style.animationDuration = Math.random() * 2 + 3 + 's';

  if (userInput.value) {
    foo.textContent = userInput.value;
  } else {
    foo.textContent = 'hello mate!';
  }

  document.body.appendChild(foo);

  setTimeout(() => {
    foo.remove();
  }, 5000);
}

function rain() {
  const runRain = setInterval(createRain, 300);
  setTimeout(() => {
    clearTimeout(runRain);
  }, 3000);
}
