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
  const text = title.textContent; 
  title.innerHTML = '';

  for (let i = 0; i < text.length; i++) {
      setTimeout(function() {
        
          title.innerHTML += text[i];
      }, i * 100); // 각 글자마다 0.1초씩 지연 적용
  }
});


