import { execute } from "./clickRandomCom.js";
import { randomArray } from "./randomValue.js";
import { userSequence } from "./validate.js";
import {executingValueObject } from "./clickRandomCom.js"
import answerValueObject from "./app.js";

/*
정답 클릭할 때 css 주기 

게임 종료하고 나오는 창에 재시작버튼 추가시키고 재시작 누르면 게임 재시작 
닫기 누르면 사이트 종료

*/

const $restartButton = document.querySelector(".modal-restart-button");
const $closeButton = document.querySelector(".modal-close-button");
const $modalLayout = document.querySelector(".modal-layout");

console.log($restartButton);

function restart() {
  if ($modalLayout.classList.contains("show")) {
    $modalLayout.classList.remove("show");
    answerValueObject.answerValue = 0;
    execute();
    // userSequence = [];
    executingValueObject.isExecuting = false;
  }
}

$restartButton.addEventListener("click", () => restart());

function close() {
  if ($modalLayout.classList.contains("show")) {
    $modalLayout.classList.remove("show");
  }
}

$closeButton.addEventListener("click", () => close());

export { $restartButton, restart, close};
