import { execute } from "./clickRandomCom.js";
import { randomArray } from "./randomValue.js";
import { userSequence } from "./validate.js";
import { executingValueObject } from "./clickRandomCom.js";
import answerValueObject from "./app.js";
import { timeObject, TIMER, timerend } from "./timerlength.js";

/*
정답 클릭할 때 css 주기 

게임 종료하고 나오는 창에 재시작버튼 추가시키고 재시작 누르면 게임 재시작 
닫기 누르면 사이트 종료

*/

const $restartButton = document.querySelector(".modal-restart-button");
const $closeButton = document.querySelector(".modal-close-button");
const $modalLayout = document.querySelector(".modal-layout");


function restart() {
  document
    .querySelector(".modal-restart-button")
    .addEventListener("click", () => {
      window.location.reload(); // 게임종료 후 모달 닫기 버튼 클릭 > 브라우저 새로고침
    });
}

$restartButton.addEventListener("click", () => restart());

function close() {
  if ($modalLayout.classList.contains("show")) {
    $modalLayout.classList.remove("show");
    executingValueObject.isExecuting = false;
    document.getElementById("timerGame").classList.add("blinking-text");
    document.getElementById(`timerGame`).style.fontSize = `16px`;
    document.getElementById(`timerGame`).textContent = `게임 재시작 버튼을 눌러 재시작 해주세요`;
    const $selector = document.querySelector(".lnr-chevron-right");
    $selector.classList.remove(`lnr-chevron-right`);
    $selector.classList.add(`lnr-sync`);
    $selector.style.cursor = `pointer`;
    $selector.style.top = `0`;
    document.querySelector(".game-turn").textContent = "재시작";
    document.querySelector(".game-turn").style.cursor = "pointer";
    document.querySelector(".game-turn").style.fontSize = "19px";

    const $menubox = document.querySelector(`.menu-nav-turn > p`);
    $menubox.addEventListener(`click`, () => {
      window.location.reload();
    });
    // .addEventListener(`click`, () => {
    //   if ($selector.textContent === `재시작`) {
    //     window.location.reload();
    //   } else {
    //     return;
    //   }
    // });
    // document.querySelector(
    //   ".lnr-chevron-right"
    // ).innerHTML = `<span class="lnr lnr-sync"></span>`;
    const Allbox = [...document.querySelectorAll(`.box`)];
    Allbox.forEach((box) => {
      box.classList.remove("hoverbox");
    });
  }
}

$closeButton.addEventListener("click", () => close());

export { $restartButton, restart, close };
