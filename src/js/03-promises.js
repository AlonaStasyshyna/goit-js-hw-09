import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayValue = document.querySelector('input[name="delay"]');
const stepValue = document.querySelector('input[name="step"]');
const amountValue = document.querySelector('input[name="amount"]');
// let position = 0;
// let delay = delayValue.value;

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const timerForCreatePromise = setInterval(() => {
      if (condition) {
      }

      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
      } else {
        // Reject
      }
    }, 1000);
  });
}

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   const timerForCreatePromise = setInterval(() => {
//     if (position === amountValue.value) {
//       clearInterval(timerForCreatePromise);
//       return;
//     }

//     position += 1;
//     delay += stepValue.value;
//     createPromise(position, delay);
//   }, 0);
// });
