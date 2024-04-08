import { randomMath, randomArray } from "./randomValue.js";
let isExecuting = false; // 실행중인지 확인
const execute = () => {
  const box = document.querySelector(`.menu-nav-home`);

  box.addEventListener(`click`, () => {
    if (isExecuting) return; // 실행 중일 때는 무시

    isExecuting = true;
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
        clearInterval(intervalId); // 배열의 끝에 도달하면 인터벌 정지
        isExecuting = false; //끝나면 다시 ㄴㄴ로 바꿈
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
  });
};

export default execute;
