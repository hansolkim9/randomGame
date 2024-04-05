var count = 3;
var counter = setInterval(timer, 1000);

function timer() {
  count--;


  if(count <= 0) {
    clearInterval(counter);

    document.getElementById("start").className = "end";
    document.getElementById("timer").innerHTML = "게임 시작!";
    return;
  }
  document.getElementById("timer").innerHTML=count;
}


