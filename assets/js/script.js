const blue = document.querySelector("#blue"),
  red = document.querySelector("#red"),
  yellow = document.querySelector("#yellow"),
  green = document.querySelector("#green"),
  msg = document.querySelector("#msg");

let order = [],
  clickedOrder = [],
  score = 0;

function shufflerOrder() {
  let colorOrder = parseInt(Math.random() * 4);
  order.push(colorOrder);

  for (let i in order) {
    let elementColor = createColorElement(order[1]);
    lightColor(elementColor, Number(i) + 1);
  }
}

function lightColor(element, number) {
  number = number * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, number / 2);
  setTimeout(() => {
    element.classList.remove("selected");
  }, number / 2);
}

function checkOrder() {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    console.log(clickedOrder.length === order.length);
    msg.innerHTML = ++score;
    nextLevel();
  }
}

function click(color) {
  clickedOrder.push(color);
  createElementColor(color).classList.add("selected");

  setTimeout(() => {
    createElementColor(color).classList.remove("selected");
    checkOrder();
  }, 300);
}

function createElementColor(color) {
  switch (color) {
    case 0:
      return blue;
    case 1:
      return yellow;
    case 2:
      return red;
    case 3:
      return green;
  }
  // if (color == 0) return blue;
  // if (color == 1) return yellow;
  // if (color == 2) return red;
  // if (color == 3) return green;
}

function nextLevel() {
  shufflerOrder();
}

function gameOver() {
  (order = []), (clickedOrder = []);
  msg.style.backgroundColor = "tomato";
  msg.style.color = "whitesmoke";

  playGame();
}

function playGame() {
  score = 0;
  msg.style.backgroundColor = "whitesmoke";
  msg.style.color = "black";

  nextLevel();
}

blue.onclick = () => click(0);
yellow.onclick = () => click(1);
red.onclick = () => click(2);
green.onclick = () => click(3);

playGame();
