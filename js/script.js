const userInput = document.getElementById('user');
let userOutput = document.getElementById('userOutput');
const btn = document.querySelector('.btn');
let messageShown = false;

btn.addEventListener('click', () => {
  if (userInput.value === '') return;
  messageShown ? resetPage() : runPage();
});

function popText() {
  const message = userInput.value;
  userOutput.classList.add('popOut');
  userOutput.textContent = message;
  btn.value = 'Clear field and run again?';
  messageShown = true;
}

function runPage() {
  userInput.readOnly = true;
  const rainText = setInterval(createText, 300);

  popText();

  setTimeout(() => {
    clearTimeout(rainText);
  }, 5000);
}

function resetPage() {
  userInput.readOnly = false;
  userInput.value = '';
  userOutput.textContent = '';
  btn.value = 'MAKE IT RAIN';
  userOutput.classList.remove('popOut');
  messageShown = false;
}

function createText() {
  const message = document.createElement('div');
  message.classList.add('user-message');

  message.style.left = Math.random() * 100 + '%';
  message.style.animationDuration = Math.random() * 2 + 3 + 's';

  if (userInput.value) {
    message.textContent = userInput.value;
  } else {
    message.textContent = 'hello mate!';
  }

  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 5000);
}
