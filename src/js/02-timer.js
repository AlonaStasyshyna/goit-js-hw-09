import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputForDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
btnStart.setAttribute('disabled', 'true');

const timerBlock = document.querySelector('.timer');
const timerFields = document.querySelectorAll('.field');
const timerValues = document.querySelectorAll('.value');
const timerLabels = document.querySelectorAll('.label');

let selectedDate = 0;
let timerStart = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (new Date() >= selectedDate) {
      return Notify.failure('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
    }
  },
};

const fp = flatpickr(inputForDate, options);

btnStart.addEventListener('click', onStartClick);

function onStartClick() {
  timerStart = setInterval(() => {
    const deltaTime = selectedDate - new Date();
    const deltaTimeObject = convertMs(deltaTime);

    for (const key in deltaTimeObject) {
      document.querySelector(`span[data-${key}]`).textContent =
        deltaTimeObject[`${key}`];
    }

    if (deltaTime < 1000) {
      clearInterval(timerStart);
      btnStart.disabled = true;
      return;
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (String(value).length < 2) {
    return String(value).padStart(2, '0');
  }

  return String(value);
}

// Styles
timerBlock.style.display = 'flex';
timerBlock.style.marginTop = '15px';
timerBlock.style.gap = '15px';
timerFields.forEach(field => {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.alignItems = 'center';
});
timerValues.forEach(value => {
  value.style.fontSize = '32px';
  value.style.lineHeight = '1';
});
timerLabels.forEach(label => {
  label.style.fontSize = '14px';
  label.style.lineHeight = '1,2';
});
