// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const elements = {
  btnStart: document.querySelector('button[data-start]'),
  inputData: document.querySelector('#datetime-picker'),
  divTimer: document.querySelector('div.timer'),
  //   divField: document.querySelector('div.field'),
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

elements.btnStart.addEventListener('click', timerStart);
elements.inputData.addEventListener('click', dataSelection);

function timerStart() {
  console.log('btnStart');
}

function dataSelection() {
  console.log('dataSelection');
  console.log(options);
  //   flatpickr(elements.inputData, options);
}

flatpickr(elements.inputData, options);
