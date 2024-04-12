import { timeObject, TIMER } from "./timerlength.js";
import { randomMath, randomArray } from "./randomValue.js";
import answerValue from "./app.js";
import {
  clickBox,
  verifyAnswer,
  $boxWrapper,
  $modalLayout,
  userSequence,
} from "./validate.js";
const $selectOrder = document.querySelector(".menu-nav-turn > p");
const executingValueObject = {
  isExecuting: false,
};
// turn 변경을 위한 변수 지정
const $turn = document.querySelector(".game-turn");
const execute = () => {
  document.getElementById(
    "timerGame"
  ).textContent = `제한 시간 : ${timeObject.sec}초`;
  if (document.querySelector(".stage-layout").classList.contains("stageshow")) {
    document.querySelector(".stage-layout").classList.remove("stageshow");
  }
  const Allbox = [...document.querySelectorAll(`.box`)];
  randomMath();
  Allbox.forEach((box) => {
    if (box.classList.contains(`bgColorChange`)) {
      box.classList.remove(`bgColorChange`);
    }
  });
  // turn : PC로 변경, 애니메이션 제거, hover 효과 제거
  $turn.textContent = "PC";
  $turn.classList.remove("blinking-text");
  document.getElementById("timerGame").classList.add("blinking-text");
  Allbox.forEach((box) => {
    box.classList.remove("hoverbox");
  });

  let index = 0; // 초기 인덱스 설정
  const intervalId = setInterval(() => {
    if (index >= randomArray.length) {
      TIMER();
      clearInterval(intervalId); // 배열의 끝에 도달하면 인터벌 정지 //끝나면 다시 ㄴㄴ로 바꿈

      // console.log(index);
      // turn : YOU로 변경, blink 애니매이션(클래스로) 추가, hover 효과 추가
      $turn.textContent = "YOU";
      document.getElementById("timerGame").classList.remove("blinking-text");
      $turn.classList.add("blinking-text");
      Allbox.forEach((box) => {
        box.classList.add("hoverbox");
      });
      setTimeout(() => {
        clickBox();
      }, 400);

      return;
    }
    if (Allbox[randomArray[index]].classList.contains("bgColorChange")) {
      Allbox[randomArray[index]].classList.remove(`bgColorChange`);
    }
    setTimeout(() => {
      Allbox[randomArray[index]].classList.add(`bgColorChange`);
      index++; //
    }, 100);
  }, 800); // 0.8초마다 실행
  // });
};

export { execute, executingValueObject };
