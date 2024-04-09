

document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.intro__button.show');
  button.addEventListener('click', function() {
      
      const documentHeight = document.body.scrollHeight;
    
      window.scrollTo({
          top: documentHeight,
          behavior: 'smooth'
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('.intro__title');
  const text = title.textContent; // 텍스트 내용 가져오기
  title.innerHTML = ''; // 텍스트 내용 초기화

  // 각 글자를 순차적으로 나타내기 위한 반복문
  for (let i = 0; i < text.length; i++) {
      setTimeout(function() {
          // 각 글자를 title에 추가하여 순차적으로 나타내기
          title.innerHTML += text[i];
      }, i * 100); // 각 글자마다 0.1초씩 지연 적용 (원하는 딜레이 조절 가능)
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var title = document.querySelector('.intro__title');
  var text = title.innerHTML;
  title.innerHTML = ''; // 텍스트 초기화

  // 한 글자씩 출력하기 위한 함수
  function typeWriter(text, i) {
      if (i < text.length) {
          title.innerHTML += text.charAt(i);
          i++;
          setTimeout(function() {
              typeWriter(text, i);
          }, 100); // 100밀리초마다 한 글자씩 출력
      } else {
          // 모든 텍스트 출력 후에 커서 이동
          title.style.borderRight = 'none'; // 커서 제거
      }
  }

  // 시작
  typeWriter(text, 0);
});


