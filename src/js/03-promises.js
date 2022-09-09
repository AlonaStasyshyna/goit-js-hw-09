import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayValue = document.querySelector('input[name="delay"]');
const stepValue = document.querySelector('input[name="step"]');
const amountValue = document.querySelector('input[name="amount"]');

let position = 0;
let delay = 0;
let step = 0;
let amount = 0;

form.addEventListener('submit', e => {
  e.preventDefault();

  delay = Number(delayValue.value);
  step = Number(stepValue.value);
  amount = Number(amountValue.value);
  startTimer();
});

function startTimer() {
  if (position === amount) {
    return;
  }

  const timerForCreatePromise = setTimeout(() => {
    position += 1;
    delay += step;
    console.log(position);
    console.log(delay);
  }, delay);
}

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const timerForCreatePromise = setTimeout(() => {
//       if (condition) {
//       }

//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         // Fulfill
//       } else {
//         // Reject
//       }
//     }, 1000);
//   });
// }

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   startTimer();
// }

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
