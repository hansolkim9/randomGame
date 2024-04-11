var count = 6;
var counter = setInterval(timer, 1000);
function timer() {
  count--;

  if (count <= 0) {
    clearInterval(counter);

    document.getElementById("start").className = "end";
    document.getElementById("timer").innerHTML = "게임 시작";
    setTimeout(() => {
      if (document.querySelector(`.start-layout`).classList.contains("show")) {
        document.querySelector(`.start-layout`).classList.remove(`show`);
      }
    }, 700);

    setTimeout(() => {
      const remove = document.getElementById(`start`);
      remove.remove();
    }, 700);

    return;
  }
  document.getElementById(
    "timer"
  ).innerHTML = `${count}초 후 게임이 시작됩니다.`;
}

export { timer, count, counter };
