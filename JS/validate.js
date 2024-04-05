/*
 pc로 출력해준 숫자와 사용자가 클릭한 박스가 정답 값(e.target) 맞는지 검증
 사용자가 클릭한 값이 틀리면 게임 종료 후 게임오버 이미지 출력(css 참고)
 사용자 선택 값 = 블록마다 id 부여, 일치여부(true, false) 판단
 클릭이벤트 발생할 때마다 사용자가 누른 블록 id 값 === pc 선택 값
 */
// 실행 js

let answerValue = 3;
let randomArray = [];

/* 박스 전체 태그 선택*/
const box = document.querySelector(`.menu-nav-home`);

function randomMath() {
  randomArray = [];
  for (let i = 0; i <= answerValue; i++) {
    let random = Math.floor(Math.random() * 9);
    randomArray.push(random);
  }
}

randomMath();
console.log(randomArray);
//
// box.addEventListener(`click`, () => {}
box.addEventListener(`click`, () => {
  const Allbox = [...document.querySelectorAll(`.box`)];
  randomMath();
  Allbox.forEach((box) => {
    if (box.classList.contains(`bgColorChange`)) {
      box.classList.remove(`bgColorChange`);
    }
  });

  for (let i = 0; i < randomArray.length; i++) {
    Allbox[randomArray[i]].classList.add(`bgColorChange`);
  }
  console.log(randomArray);
});

// const intervalId = setInterval(() => {}, 800); // 0.8초마다 실행

// =============================전역 변수 정의 영역========================//

const userSequence = []; // 사용자가 입력한 순서를 저장하는 배열
// ==============================함수 정의 영역===========================//

const $boxWrapper = document.querySelector(".box-wrapper");
const $modalLayout = document.querySelector(".modal-layout");

// 게임 종료 함수

let score = 0;

function verifyAnswer(i) {
  // 사용자가 클릭한 박스가 정답이 아닌 경우
  for (let i = 0; i < userSequence.length; i++) {
    console.log(randomArray[i]);
    console.log(userSequence[i]);
    if (randomArray[i] !== userSequence[i]) {
      document.querySelector(".modal-layout").classList.add("show");
    } else {
      // answerValue++;
      // score++;
    }
  }
}

$boxWrapper.addEventListener("click", (e) => {
  if (!e.target.matches(".box-wrapper .box")) return;

  const dataId = +e.target.dataset.id;
  userSequence.push(dataId);
  // console.log(dataId);
  // console.log(e.target);
  // console.log(randomArray);
  console.log(userSequence);

  verifyAnswer();
});

/*
// 게임 초기화 함수
function initGame() {
  container.innerHTML = ""; // 컨테이너 비우기
  gameoverDiv.style.display = "none"; // 게임 오버 화면 숨기기
  sequence = []; // 순서 배열 초기화
  userSequence = []; // 사용자 입력 배열 초기화
  score = 0; // 점수 초기화
}
*/
