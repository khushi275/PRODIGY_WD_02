let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');

function formatTime() {
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
  running = true;
  startButton.disabled = true;
  stopButton.disabled = false;
  
  timer = setInterval(function() {
    seconds++;
    
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    
    timeDisplay.textContent = formatTime();
  }, 1000);
}

function stopStopwatch() {
  running = false;
  clearInterval(timer);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetStopwatch() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timeDisplay.textContent = formatTime();
  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
