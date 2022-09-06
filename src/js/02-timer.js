import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputForDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
btnStart.setAttribute('disabled', 'true');

const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');

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
      btnStart.disabled = false;
      btnStart.addEventListener('click', () => {
        const timerStart = setInterval(() => {
          const deltaTime = selectedDates[0] - new Date();
          const { days, hours, minutes, seconds } = convertMs(deltaTime);

          timerSeconds.textContent = `${seconds}`;
          timerMinutes.textContent = `${minutes}`;
          timerHours.textContent = `${hours}`;
          timerDays.textContent = `${days}`;
        }, 1000);

        // if (deltaTime < 1) {
        //   clearInterval(timerStart);
        // }
      });
    }
  },
};

const fp = flatpickr(inputForDate, options);

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
