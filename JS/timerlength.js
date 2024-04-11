import {
  clickBox,
  verifyAnswer,
  $boxWrapper,
  $modalLayout,
  userSequence,
} from "./validate.js";
const gameTimer = document.getElementById("timerGame"); //스코어 기록창-분
const timeObject = {
  min: 0,
  sec: 3,
};

let timerend;
function TIMER() {
  gameTimer.textContent = Math.floor(timeObject.sec) + `초`;
  timerend = setInterval(function () {
    if (timeObject.sec > 0) {
      timeObject.sec = timeObject.sec - 1;
      gameTimer.textContent = Math.floor(timeObject.sec) + `초`; //실수로 계산되기 때문에 소숫점 아래를 버리고 출력해준다.
    } else if (timeObject.sec === 60) {
      timeObject.min = 1;
      timeObject.sec = 0;
      gameTimer.textContent = Math.floor(timeObject.sec) + `초`; //실수로 계산되기 때문에 소숫점 아래를 버리고 출력해준다.
    }
    if (timeObject.sec === 0) {
      clearInterval(timerend);
      document.querySelector(".modal-layout").classList.add("show");
    }
  }, 1000); //1초마다
}

export { timeObject, TIMER, timerend };
