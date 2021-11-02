const btnStartElement = document.querySelector('[data-action="start"]');
const btnStopElement = document.querySelector('[data-action="stop"]');
const btnResetElement = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 180;
let interval;


const start = () => {
  isRunning = true;
  interval = setInterval(incrementTimer, 1000)
}

const stop = () => {
  isRunning = false;
  clearInterval(interval);
}

const reset = () => {
  minutes.innerText = '03';
  seconds.innerText = '00';
  timerTime = 180;
}

const pad = (number) => {
  return (number < 10) ? '0' + number : number;
}

const incrementTimer = () => {
  timerTime--;
  if (!timerTime) {
    stop()
  }
  const numberMinutes = Math.floor(timerTime / 60);
  const numberSeconds = timerTime % 60;
  
  minutes.innerText = pad(numberMinutes);
  seconds.innerText = pad(numberSeconds);
}

btnStartElement.addEventListener('click', startTimer = () => {
  start();
});

btnStopElement.addEventListener('click', stopTimer = () => {
  stop();
});

btnResetElement.addEventListener('click', stopTimer = () => {
  reset();
  stop();
});