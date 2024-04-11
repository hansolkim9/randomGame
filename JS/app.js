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
import { $restartButton, restart, close } from "./restart.js";
import clickBoxBox from "./click.js";

clickBoxBox();
timer();
document.getElementById(
  "timerGame"
).textContent = `제한 시간 : ${timeObject.sec}초`;
setTimeout(() => {
  document.getElementById("timerGame").classList.add("blinking-text");
}, 5500);
setTimeout(() => {
  execute();
}, 5500);

export default answerValueObject;
