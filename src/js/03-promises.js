import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({
  useIcon: false,
});

const form = document.querySelector('.form');
const delayValue = document.querySelector('input[name="delay"]');
const stepValue = document.querySelector('input[name="step"]');
const amountValue = document.querySelector('input[name="amount"]');

form.addEventListener('submit', e => {
  e.preventDefault();

  const { delay, step, amount } = e.target.elements;
  const formStep = Number(step.value);
  const formAmount = Number(amount.value);
  let formDelay = Number(delay.value);

  for (let i = 1; i <= formAmount; i += 1) {
    createPromise(i, formDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    formDelay += formStep;
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
