function changeDice() {
  let a = Math.floor(Math.random() * 6 + 1);
  let b = Math.floor(Math.random() * 6 + 1);

  if (a > b) {
    document.querySelector("h1").textContent = "Player 1 Wins";
  }
  if (b > a) {
    document.querySelector("h1").textContent = "Player 2 Wins";
  }
  if (a === b) {
    document.querySelector("h1").textContent = "Draw";
  }
  switch (a) {
    case 1:
      document.querySelector(".img1").setAttribute("src", "images/dice1.png");
      break;
    case 2:
      document.querySelector(".img1").setAttribute("src", "images/dice2.png");
      break;
    case 3:
      document.querySelector(".img1").setAttribute("src", "images/dice3.png");
      break;
    case 4:
      document.querySelector(".img1").setAttribute("src", "images/dice4.png");
      break;
    case 5:
      document.querySelector(".img1").setAttribute("src", "images/dice5.png");
      break;
    case 6:
      document.querySelector(".img1").setAttribute("src", "images/dice6.png");
      break;
  }
  switch (b) {
    case 1:
      document.querySelector(".img2").setAttribute("src", "images/dice1.png");
      break;
    case 2:
      document.querySelector(".img2").setAttribute("src", "images/dice2.png");
      break;
    case 3:
      document.querySelector(".img2").setAttribute("src", "images/dice3.png");
      break;
    case 4:
      document.querySelector(".img2").setAttribute("src", "images/dice4.png");
      break;
    case 5:
      document.querySelector(".img2").setAttribute("src", "images/dice5.png");
      break;
    case 6:
      document.querySelector(".img2").setAttribute("src", "images/dice6.png");
      break;
  }
}
