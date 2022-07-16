var scoreBarHeight = 0;
let rootVariables = document.documentElement;

const speeds = [150, 125, 110, 10, 88, 66, 35, 100, 75, 50, 25, 15];
const minTrackLength = -450;
const maxTrackLength = 1410;

let dino1Distance = maxTrackLength;
let dino2Distance = maxTrackLength;
let dino3Distance = maxTrackLength;
let dino4Distance = maxTrackLength;

let dino1speed = 20;
let dino2speed = 15;
let dino3speed = 75;
let dino4speed = 55;

const gameOverCode =
  '<img src="resources/giphy.gif" width="100%" height="100%" />';

function increase() {
  console.log("in increase: ", scoreBarHeight);
  if (scoreBarHeight >= 88) {
    gameWon();
  }
  scoreBarHeight += 16;
  rootVariables.style.setProperty("--score-bar-height", scoreBarHeight + "%");
}
function decrease() {
  console.log("in decrease: ", scoreBarHeight);
  if (scoreBarHeight <= 0) {
    gameOver();
  }
  scoreBarHeight -= 8;
  rootVariables.style.setProperty("--score-bar-height", scoreBarHeight + "%");
}
function gameWon() {
  document.getElementById("gameArea").style.display = "none";
  document.getElementById("scoreBar").style.display = "none";
  document.getElementById("gameWon").style.display = "block";
}
function gameOver() {
  document.getElementById("gameOver").style.display = "block";
  document.getElementById("gameArea").style.display = "none";
  document.getElementById("scoreBar").style.display = "none";
}
function start() {
  document.getElementById("gameStart").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("scoreBar").style.display = "block";
  setInterval(moveDino1, 100);
  setInterval(moveDino2, 100);
  setInterval(moveDino3, 100);
  setInterval(moveDino4, 100);
}
function restart() {
  scoreBarHeight = 0;
  rootVariables.style.setProperty("--score-bar-height", scoreBarHeight + "%");
  document.getElementById("gameOver").style.display = "none";
  document.getElementById("gameWon").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("scoreBar").style.display = "block";
}

function moveDino1() {
  if (dino1Distance >= maxTrackLength) {
    dino1Distance = minTrackLength;
  }
  dino1Distance += dino1speed;
  rootVariables.style.setProperty("--dino1-distance", dino1Distance + "px");
}
function moveDino2() {
  if (dino2Distance >= maxTrackLength) {
    dino2Distance = minTrackLength;
  }
  dino2Distance += dino2speed;
  rootVariables.style.setProperty("--dino2-distance", dino2Distance + "px");
}
function moveDino3() {
  if (dino3Distance >= maxTrackLength) {
    dino3Distance = minTrackLength;
  }
  dino3Distance += dino3speed;
  rootVariables.style.setProperty("--dino3-distance", dino3Distance + "px");
}
function moveDino4() {
  if (dino4Distance >= maxTrackLength) {
    dino4Distance = minTrackLength;
  }
  dino4Distance += dino4speed;
  rootVariables.style.setProperty("--dino4-distance", dino4Distance + "px");
}

function getRandomSpeed() {
  index = Math.floor(Math.random() * speeds.length);
  return speeds[index];
}

function popDino1() {
  console.log("in pop1");
  increase();
  console.log("currentScore= ", scoreBarHeight);
  dino1Distance = minTrackLength;
  dino1speed = getRandomSpeed();
}
function popDino2() {
  console.log("in pop2");
  increase();
  console.log("currentScore= ", scoreBarHeight);

  dino2Distance = minTrackLength;
  dino2speed = getRandomSpeed();
}
function popDino3() {
  console.log("in pop3");
  increase();
  console.log("currentScore= ", scoreBarHeight);
  dino3Distance = minTrackLength;
  dino3speed = getRandomSpeed();
}
function popDino4() {
  console.log("in pop4");
  increase();
  console.log("currentScore= ", scoreBarHeight);
  dino4Distance = minTrackLength;
  dino4speed = getRandomSpeed();
}
