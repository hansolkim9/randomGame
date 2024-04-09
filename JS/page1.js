

document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.intro__button.show');
  button.addEventListener('click', function() {
      // Get the height of the entire document
      const documentHeight = document.body.scrollHeight;
      
      // Smooth scroll to the bottom of the page
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