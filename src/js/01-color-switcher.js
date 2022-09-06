const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let newBackgroundColor = null;

btnStop.setAttribute('disabled', 'true');

btnStart.addEventListener('click', onStartClick);
btnStop.addEventListener('click', onStopClick);

function onStartClick(e) {
  btnStart.setAttribute('disabled', 'true');
  btnStop.disabled = !e.target;

  newBackgroundColor = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick(e) {
  btnStop.disabled = e.target;
  btnStart.disabled = !e.target;

  clearInterval(newBackgroundColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
