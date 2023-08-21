// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const elements = {
  btnStart: document.querySelector('button[data-start]'),
  inputData: document.querySelector('#datetime-picker'),
  divTimer: document.querySelector('div.timer'),
  //   divField: document.querySelector('div.field'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

elements.divTimer.style.display = 'flex';

// elements.divTimer.childNodes.style.display = 'flex';
// elements.divTimer.childNodes.style.flexDirection = 'column';

// elements.divField.style.display = 'flex';
// elements.divField.style.flexDirection = 'column';

elements.btnStart.disabled = true;
// elements.btnStart.disabled = false;

elements.btnStart.addEventListener('click', timerStart);

// function timerStart() {
const date = new Date();
console.log('date', date);

const newDate = new Date(elements.inputData.value);
console.log('newDate', newDate);

let timeLeft = newDate.getTime() - date.getTime();
console.log(timeLeft);

if (timeLeft <= 0) {
  window.alert('Please choose a date in the future');
} else {
  elements.btnStart.disabled = false;
  timerStart();
}

function timerStart() {
  const idSetInterval = setInterval(() => {
    const timer = convertMs(timeLeft);

    timeLeft = timeLeft - 1000;

    elements.dataDays.textContent = addLeadingZero(timer.days);
    elements.dataHours.textContent = addLeadingZero(timer.hours);
    elements.dataMinutes.textContent = addLeadingZero(timer.minutes);
    elements.dataSeconds.textContent = addLeadingZero(timer.seconds);

    if (timeLeft <= 0) {
      clearInterval(idSetInterval);
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
