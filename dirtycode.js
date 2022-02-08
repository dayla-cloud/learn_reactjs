const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const timerElement = document.getElementById("js-clock");

function getClock() {
  const goalTime = new Date("Dec 25, 2022 000:00:00");
  const remainTime = getRemainingTimeFromDate(goalTime);
  const remainingTimeDetails = caculateRemainingTimeDetails(remainTime);
  timerElement.innerText = getClockText(remainingTimeDetails);
}

function getRemainingTimeFromDate(date) {
  const now = new Date();
  const remain = date - now;
  return remain;
}

function caculateRemainingTimeDetails(remain) {
  const days = Math.floor(remain / DAY);
  const hours = Math.floor((remain % DAY) / HOUR);
  const minutes = Math.floor((remain % HOUR) / MINUTE);
  const seconds = Math.floor((remain % MINUTE) / SECOND);
  return { days, hours, minutes, seconds };
}

function getClockText({ days, hours, minutes, seconds }) {
  const paddedDays = changeNumberToTwoDigits(days);
  const paddedHours = changeNumberToTwoDigits(hours);
  const paddedMinutes = changeNumberToTwoDigits(minutes);
  const paddedSeconds = changeNumberToTwoDigits(seconds);
  return `${paddedDays}d ${paddedHours}h ${paddedMinutes}m ${paddedSeconds}s`;
}

function changeNumberToTwoDigits(number) {
  return String(number).padStart(2, "0");
}

getClock();
setInterval(getClock, 1000);

// Flynn 님의 클린코드
