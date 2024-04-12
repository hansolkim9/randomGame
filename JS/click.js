import {
  clickBox,
  verifyAnswer,
  $boxWrapper,
  $modalLayout,
  userSequence,
} from "./validate.js";
import { execute, executingValueObject } from "./clickRandomCom.js";

function clickBoxBox() {
  $boxWrapper.addEventListener("click", (e) => {
    if (
      !e.target.matches(".box-wrapper .box") ||
      !executingValueObject.isExecuting
    )
      return;

    // 클릭한 박스에 "click" 클래스 추가
    e.target.classList.add("click");

    // 500밀리초 후에 "click" 클래스 제거
    setTimeout(() => {
      e.target.classList.remove("click");
    }, 500);
  });
}

export default clickBoxBox;
