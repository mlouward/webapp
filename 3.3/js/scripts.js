function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function removeFirstButton() {
  const buttOne = document.getElementsByTagName("button")[0];
  if (buttOne.style.display === "none")
    buttOne.style.display = "inline";
  else
    buttOne.style.display = "none";
}

function toUpperButtons(up) {
  const allButtons = document.getElementsByTagName("button");
  for (const button of allButtons) {
    button.innerText = up ? button.innerText.toLocaleUpperCase() : button.innerText.toLocaleLowerCase();
  }
}

function writeHello() {
  // Only write one time (last node is a paragraph)
  if (document.body.childNodes[document.body.childNodes.length - 1].nodeName === "P") return;
  let elem = document.createElement("p");
  elem.textContent = "Hello, World!";
  elem.style = "text-align: center;font-size: 100px; padding: 2em;";
  document.body.appendChild(elem);
}

function playSound() {
  const audio = new Audio('media/sound.wav');
  audio.play();
}

function disappearHover() {
  const button = this.document.getElementById("1");
  button.style.display = "none";
}

