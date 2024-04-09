import { randomMath, randomArray } from "./randomValue.js";
import answerValue from "./app.js";
import {
  clickBox,
  verifyAnswer,
  $boxWrapper,
  $modalLayout,
  userSequence,
} from "./validate.js";
const executingValueObject = {
  isExecuting: false,
};
const execute = () => {
  const Allbox = [...document.querySelectorAll(`.box`)];
  randomMath();
  console.log(randomArray);
  Allbox.forEach((box) => {
    if (box.classList.contains(`bgColorChange`)) {
      box.classList.remove(`bgColorChange`);
    }
  });
  let index = 0; // 초기 인덱스 설정
  const intervalId = setInterval(() => {
    if (index >= randomArray.length) {
      clearInterval(intervalId); // 배열의 끝에 도달하면 인터벌 정지 //끝나면 다시 ㄴㄴ로 바꿈

      // console.log(index);
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
    }, 500);
  }, 800); // 0.8초마다 실행
  // });
};

export { execute, executingValueObject };
