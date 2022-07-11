const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

const deadline = new Date("September 30 ,2022");

setInterval(() => {
  const currentTime = new Date().getTime();
  const distance = deadline - currentTime;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  isCountdownEqualToDataset(daysEl, days);
  isCountdownEqualToDataset(hoursEl, hours);
  isCountdownEqualToDataset(minutesEl, minutes);
  isCountdownEqualToDataset(secondsEl, seconds);

  daysEl.dataset.num = days < 10 ? `0${days}` : days;
  hoursEl.dataset.num = hours < 10 ? `0${hours}` : hours;
  minutesEl.dataset.num = minutes < 10 ? `0${minutes}` : minutes;
  secondsEl.dataset.num = seconds < 10 ? `0${seconds}` : seconds;

  updateEl(".day", days);
  updateEl(".minute", minutes);
  updateEl(".hour", hours);
  updateEl(".second", seconds);
}, 1000);

// if the dataset is not equal to the countdown that means the number has changed so we add the animation class otherwise we will remove it

function isCountdownEqualToDataset(element, countDown) {
  if (Number(element.getAttribute("data-num")) !== countDown) {
    element.classList.add("animate");
  } else {
    element.classList.remove("animate");
  }
}

function updateEl(elements, countDown) {
  document
    .querySelectorAll(elements)
    .forEach(
      (el) => (el.textContent = countDown < 10 ? `0${countDown}` : countDown)
    );
}
