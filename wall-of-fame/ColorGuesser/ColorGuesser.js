var square = document.querySelectorAll(".square");
var disclr = document.getElementById("clr");
var verdict = document.getElementById("verdict");
var ngame = document.getElementById("new");
var header = document.getElementById("header");
var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");
var choice = [];
var numbers = 6;
var bgclr = "palegoldenrod";

function clr() {
  var r = Math.floor(Math.random() * 255 + 1);
  var g = Math.floor(Math.random() * 255 + 1);
  var b = Math.floor(Math.random() * 255 + 1);
  return "RGB(" + r + ", " + g + ", " + b + ")";
}

function sel() {
  var call = clr();
  choice.push(call);
}

for (var i = 6; i < 9; i++) square[i].style.display = "none";

function start() {
  header.style.backgroundColor = "lightsteelblue";
  ngame.textContent = "New Game";
  verdict.textContent = null;
  console.log(numbers);
  for (var i = 0; i < numbers; i++) {
    sel();
    square[i].style.backgroundColor = choice[i];
    square[i].addEventListener("click", function () {
      if (this.style.backgroundColor == disclr.textContent.toLowerCase()) {
        verdict.textContent = "correct";
        for (var i = 0; i < numbers; i++)
          square[i].style.backgroundColor = disclr.textContent;
        header.style.backgroundColor = disclr.textContent;
        ngame.textContent = "Play Again?";
      } else {
        verdict.textContent = "incorrect";
        this.style.backgroundColor = bgclr;
      }
    });
  }
  disclr.textContent = choice[Math.floor(Math.random() * choice.length)];
}

start();

ngame.addEventListener("click", function () {
  choice = [];
  start();
  console.log(choice);
});
easy.addEventListener("click", function () {
  numbers = 3;
  for (var i = 3; i < 9; i++) square[i].style.display = "none";
  choice = [];
  start();
});
medium.addEventListener("click", function () {
  numbers = 6;
  for (var i = 3; i < 6; i++) square[i].style.display = "block";
  for (var i = 6; i < 9; i++) square[i].style.display = "none";
  choice = [];
  start();
});
hard.addEventListener("click", function () {
  numbers = 9;
  for (var i = 3; i < 9; i++) square[i].style.display = "block";
  choice = [];
  start();
});
