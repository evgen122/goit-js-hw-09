const elements = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

elements.btnStart.addEventListener('click', colorStart);
elements.btnStop.addEventListener('click', colorStop);

elements.btnStart.disabled = false;
elements.btnStop.disabled = true;

function colorStart() {
  //   console.log(colorStart);
  elements.btnStart.disabled = true;
  elements.btnStop.disabled = false;

  idInterval = setInterval(() => {
    elements.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function colorStop() {
  //   console.log(colorStop);
  elements.btnStart.disabled = false;
  elements.btnStop.disabled = true;
  clearInterval(idInterval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
