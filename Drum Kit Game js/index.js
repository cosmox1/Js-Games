function handleClick(pressedElement) {
  switchul(pressedElement.className);
  animation(pressedElement.className);
}
this.document.addEventListener("keydown", function (event) {
  let name = event.key + " drum";
  switchul(name);
  animation(name);
});

function switchul(identif) {
  switch (identif) {
    case "w drum":
      let audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a drum":
      let audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;
    case "s drum":
      let aud3 = new Audio("sounds/tom-3.mp3");
      aud3.play();
      break;
    case "d drum":
      let aud4 = new Audio("sounds/tom-4.mp3");
      aud4.play();
      break;
    case "j drum":
      let aud5 = new Audio("sounds/snare.mp3");
      aud5.play();
      break;
    case "k drum":
      let aud6 = new Audio("sounds/kick-bass.mp3");
      aud6.play();
      break;
    case "l drum":
      let aud7 = new Audio("sounds/crash.mp3");
      aud7.play();

    default:
      break;
  }
}

function animation(identifierul) {
  console.log(identifierul);
  let stringu = identifierul.slice(0, 1);
  console.log(stringu);
  let animatie = document.querySelector("." + stringu);
  animatie.classList.add("pressed");

  setTimeout(function () {
    animatie.classList.remove("pressed");
  }, 100);
}
