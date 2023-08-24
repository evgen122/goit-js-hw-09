import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const elements = {
  btnStart: document.querySelector('button[data-start]'),
  inputData: document.querySelector('#datetime-picker'),
  divTimer: document.querySelector('div.timer'),
  divField: document.querySelectorAll('.field'),
  divValue: document.querySelectorAll('.value'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

elements.divTimer.style.display = 'flex';
elements.divTimer.style.gap = '30px';

elements.divField.forEach(element => {
  element.style.width = '50px';
  element.style.textAlign = 'center';
});

elements.divValue.forEach(element => {
  element.style.fontSize = '30px';
});

let timeLeft;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();

    const newDate = new Date(elements.inputData.value);

    timeLeft = newDate.getTime() - date.getTime();

    if (timeLeft <= 0) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      elements.btnStart.disabled = false;
    }
  },
};

elements.btnStart.disabled = true;

elements.btnStart.addEventListener('click', timerStart);

function timerStart() {
  elements.btnStart.disabled = true;
  elements.inputData.disabled = true;
  const idSetInterval = setInterval(() => {
    const timer = convertMs(timeLeft);

    timeLeft = timeLeft - 1000;

    elements.dataDays.textContent = addLeadingZero(timer.days);
    elements.dataHours.textContent = addLeadingZero(timer.hours);
    elements.dataMinutes.textContent = addLeadingZero(timer.minutes);
    elements.dataSeconds.textContent = addLeadingZero(timer.seconds);

    if (timeLeft <= 0) {
      clearInterval(idSetInterval);
      elements.inputData.disabled = false;
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
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

flatpickr(elements.inputData, options);
