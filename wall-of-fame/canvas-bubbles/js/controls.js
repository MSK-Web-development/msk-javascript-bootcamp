// undefined variables are coming from canvas.js
const controls = document.getElementById("canvas-controls");
const controlsToggle = document.getElementById("control-toggle");

let isControlsOpen = false;

function onThemeChange() {
  theme = theme !== "light" ? "light" : "dark";
  const themeBtn = document.querySelector(".theme-btn");

  const bgColor = theme === "light" ? "rgba(255,255,255)" : "rgba(0,0,0)";

  canvas.style.backgroundColor = bgColor;
  themeBtn.textContent = theme === "light" ? "🌙" : "🌞";
}

function onNumChange() {
  const num = document.getElementById("maxNum");
  totalNum = num.value;
  computeCircles();
}

function onMaxChange() {
  const max = document.getElementById("maxSize");
  maxRadius = max.value;
  computeCircles();
}

function onMinChange() {
  const min = document.getElementById("minSize");
  minRadius = min.value;
  computeCircles();
}

function toggleControls() {
  isControlsOpen = !isControlsOpen;
  controlsToggle.textContent = isControlsOpen ? "x" : "⚙";

  controls.style.transform = !isControlsOpen
    ? "translateX(-100%)"
    : "translateX(0px)";
}

function onRefresh() {
  computeCircles();
}
