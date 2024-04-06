let randomArray = [];

function randomMath() {
  randomArray = [];
  for (let i = 0; i <= answerValue; i++) {
    let random = Math.floor(Math.random() * 9);
    randomArray.push(random);
  }
}
// 랜덤 값 뽑는 함수.
export { randomMath, randomArray };
import { answerValue } from "./app.js";
