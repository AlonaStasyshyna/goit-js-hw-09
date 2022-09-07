import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputForDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
btnStart.setAttribute('disabled', 'true');

const timerBlock = document.querySelector('.timer');
const timerFields = document.querySelectorAll('.field');
const timerValues = document.querySelectorAll('.value');
const timerLabels = document.querySelectorAll('.label');
const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');

const SELECTEDDATE_KEY = 'selected-date';
let timerStart = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (new Date() >= selectedDates[0]) {
      return window.alert('Please choose a date in the future');
    } else {
      localStorage.setItem(SELECTEDDATE_KEY, selectedDates[0]);
      btnStart.disabled = false;
    }
  },
};

const fp = flatpickr(inputForDate, options);

btnStart.addEventListener('click', onStartClick);

function onStartClick() {
  timerStart = setInterval(() => {
    const selectedDate = new Date(localStorage.getItem(SELECTEDDATE_KEY));
    const deltaTime = selectedDate - new Date();
    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    timerSeconds.textContent = `${seconds}`;
    timerMinutes.textContent = `${minutes}`;
    timerHours.textContent = `${hours}`;
    timerDays.textContent = `${days}`;

    if (deltaTime < 1000) {
      clearInterval(timerStart);
      localStorage.removeItem(SELECTEDDATE_KEY);
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
