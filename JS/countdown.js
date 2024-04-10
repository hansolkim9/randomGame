var count = 4;
var counter = setInterval(timer, 1000);
function timer() {
  count--;

  if (count <= 0) {
    clearInterval(counter);

    document.getElementById("start").className = "end";
    document.getElementById("timer").innerHTML = "GAME START!!!";
    setTimeout(() => {
      const remove = document.getElementById(`start`);
      remove.remove();
    }, 700);

    return;
  }
  document.getElementById("timer").innerHTML = count;
}

export { timer, count, counter };
