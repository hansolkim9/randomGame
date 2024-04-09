const answerValueObject = {
  answerValue: 0,
}; // 맞춘 정답 카운트 횟수.
// let executeBox = false;
// 일단 임의로 집 버튼 클릭시 실행하게 해둠. 기본값은 수정 가능 ~
// remove 시키기.
import { execute, executingValueObject } from "./clickRandomCom.js";
import { timer, count, counter } from "./countdown.js";
import {
  clickBox,
  verifyAnswer,
  $boxWrapper,
  $modalLayout,
  userSequence,
} from "./validate.js";
// timer();

setTimeout(() => {
  execute();
}, 3300);

export default answerValueObject;
