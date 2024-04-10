const answerValueObject = {
  answerValue: 0,
}; // 맞춘 정답 카운트 횟수.
// let executeBox = false;
// 일단 임의로 집 버튼 클릭시 실행하게 해둠. 기본값은 수정 가능 ~
// remove 시키기.
import { execute, executingValueObject } from "./clickRandomCom.js";
import { timer, count, counter } from "./countdown.js";
import { timeObject, TIMER } from "./timerlength.js";
import {
  clickBox,
  verifyAnswer,
  $boxWrapper,
  $modalLayout,
  userSequence,
} from "./validate.js";
// timer();
document.getElementById(
  "timerGame"
).textContent = `제한 시간 : ${timeObject.sec}초`;
setTimeout(() => {
  execute();
}, 3300);

export default answerValueObject;

document.querySelector('.modal-close-button').addEventListener('click', () => {
  window.location.reload(); // 게임종료 후 모달 닫기 버튼 클릭 > 브라우저 새로고침
});