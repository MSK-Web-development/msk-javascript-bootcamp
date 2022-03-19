var slider = document.getElementById("changeSize");
const container = document.querySelector(".data-container");
var x = [];

generateBlocks(Number(slider.value));

slider.oninput = function() {
  generateBlockUtil();
}

function generateBlockUtil(){
  container.innerHTML = '';
  var result = document.querySelector("#result");
  result.innerHTML = '';

  document.getElementById("warning").innerHTML = '';
  if(slider.value > 150){
    let warning = document.getElementById("warning");
    let res = document.createElement('h3');
    res.innerHTML = 'Warning: Dataset size is very high. Quick sort recommended!';
    warning.appendChild(res);
  }

  generateBlocks(Number(slider.value));
}

function generateBlocks(num = 45) {

  x = [];

  for (let i = 1; i < num; i += 1){
      x.push(i);
    }

    x.sort(() => Math.random() - 0.5); //shuffle array

    for (let i = 0; i < num-1; i += 1) {
      
      const value = x[i];
      const block = document.createElement("div");
      
      block.classList.add("block");
      
      if(num < 100)
        block.style.height = `${value * 3}px`;
      else if(num >= 100 && num < 200)
        block.style.height = `${value * 1.35}px`;
      else if(num >= 200 && num < 300)
        block.style.height = `${value * 0.9}px`;
      else if(num >= 300 && num < 400)
        block.style.height = `${value * 0.6}px`;
      else if(num >= 400)
        block.style.height = `${value * 0.5}px`;

      block.style.width = `${900/(num)}px`;
      block.style.transform = `translateX(${i * 1200/(num)}px)`;
  
      const blockLabel = document.createElement("label");
      blockLabel.classList.add("block__id");
      
      if(num > 50 && num < 80)
        blockLabel.style.fontSize = `10px`;
      if(num >= 80 && num < 120)
        blockLabel.style.fontSize = `6px`;
      if(num >= 120 && num < 200)
        blockLabel.style.fontSize = `3px`;
      if(num >= 200)
        blockLabel.style.fontSize = `0px`;

        blockLabel.innerHTML = value;
  
      block.appendChild(blockLabel);
      container.appendChild(block);
    }
  }