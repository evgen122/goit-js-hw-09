import Notiflix from 'notiflix';

const elements = {
  firstDelay: document.querySelector("[name='delay']"),
  delayStep: document.querySelector("[name='step']"),
  amount: document.querySelector("[name='amount']"),
  btnSubmit: document.querySelector("[type='submit']"),
};

elements.btnSubmit.addEventListener('click', handleClick);

function handleClick() {
  elements.btnSubmit.preventDefault();
  let delay = Number(elements.firstDelay.value);
  const step = Number(elements.delayStep.value);
  const amount = Number(elements.amount.value);

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    createPromise(position, delay);
    delay = delay + step;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    // console.log('position', position);
    // console.log('delay', delay);

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay });
        // Reject
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

// createPromise(2, 2000);
// createPromise(3, 3000);
