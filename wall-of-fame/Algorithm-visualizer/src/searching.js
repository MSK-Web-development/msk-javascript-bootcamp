let searchInput = document.getElementById("search");
let searchInputValue = -1;

searchInput.addEventListener("input",function(){
    searchInputValue = this.value;
})

  async function linearSearch(num){
    if(num == -1){
      searchInput.style.border = '1px solid red';
      let current = document.getElementsByClassName("highlight");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" highlight", "");
      }
      return;
    }
    searchInput.style.border = '';

    let blocks = document.querySelectorAll(".block");

    // disable menu
    document.getElementById("changeSize").disabled = true;
    for (var i = 0; i < algos.length; i++) {
      algos[i].className += " disableClick";
    }
    document.getElementById("genBlocks").disabled = true;

    // reset result section
    document.getElementById("result").innerHTML = '';
    let result = document.getElementById("result");
    let res = document.createElement('h3');


    res.innerHTML = 'Linear Searching Started...';
    result.appendChild(res);
    
    let foundIndex = -1;
    for (var i = 0; i < algos.length; i++) {
      algos[i].className += " disableClick";
    }
    
    let start = performance.now();
    for (let i = 0; i < blocks.length - 1; i += 1) {
        blocks[i].style.backgroundColor = "#FF4949";
        var value = Number(blocks[i].childNodes[0].innerHTML);
        await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, 250)
          );
        if(value == num){
            foundIndex = i;
            blocks[i].style.backgroundColor = "#13CE66";
            break;
        }
        blocks[i].style.backgroundColor = "#58b7ff";
    }
    let end = performance.now();
    let time = document.createElement('p');
    
    if(foundIndex != -1)
      time.innerHTML = `Element found at index ${foundIndex} <br> Time taken: ${(end-start)/1000} Sec`;
    else
      time.innerHTML = `Element not found`;
    
    res.appendChild(time);
    //enable menu
    current = document.getElementsByClassName("highlight");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" highlight", "");
    }
    for (var k = 0; k < algos.length; k++) {
      algos[k].className = algos[k].className.replace("disableClick","");
    }
    document.getElementById("changeSize").disabled = false;
    document.getElementById("genBlocks").disabled = false;
  }

  async function binarySearch(num){

    if(num == -1){
      searchInput.style.border = '1px solid red';
      var current = document.getElementsByClassName("highlight");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" highlight", "");
      }
      return;
    }
    searchInput.style.border = '';


    await quickSort(1);
    let blocks = document.querySelectorAll(".block");
    blocks.forEach(function(el,index){
        blocks[index].style.backgroundColor = "#58b7ff";
    })
    // disable menu
    document.getElementById("changeSize").disabled = true;
    for (var i = 0; i < algos.length; i++) {
      algos[i].className += " disableClick";
    }
    document.getElementById("genBlocks").disabled = true;

    let result = document.getElementById("result");
    let res = document.createElement('h3');
    res.innerHTML = 'Binary Searching Started...';
    result.appendChild(res);
    let foundIndex = -1;
    let start = performance.now();

    let l = 0;
    let r = blocks.length - 1;
    while (l <= r) {
        blocks[l].style.backgroundColor = "#FF4949";
        blocks[r].style.backgroundColor = "#FF4949";
        var m = Math.floor(l + (r - l) / 2); 
        await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, 250)
          );
        if (Number(blocks[m].childNodes[0].innerHTML) == num) {
            blocks[m].style.backgroundColor = "#13CE66";
            foundIndex = m;
            if(m==l && m!=r) blocks[r].style.backgroundColor = "#58b7ff";
            if(m==r && m!=l) blocks[l].style.backgroundColor = "#58b7ff"; 
            if(m!=r && m!=l){
                blocks[r].style.backgroundColor = "#58b7ff";
                blocks[l].style.backgroundColor = "#58b7ff";
            }
            break;
        }
        if (Number(blocks[m].childNodes[0].innerHTML) < num){
            blocks[l].style.backgroundColor = "#58b7ff";
            l = m + 1;
        } 
        else{
            blocks[r].style.backgroundColor = "#58b7ff";
            r = m - 1;
        }
    }
    let end = performance.now();
    let time = document.createElement('p');

    if(foundIndex != -1)
      time.innerHTML = `Element found at index ${foundIndex} <br> Time taken: ${((end-start)/1000).toFixed(4)} Sec`;
    else
      time.innerHTML = `Element not found`;
    
    res.appendChild(time);
    //enable menu
    current = document.getElementsByClassName("highlight");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" highlight", "");
    }
    for (let k = 0; k < algos.length; k++) {
      algos[k].className = algos[k].className.replace("disableClick","");
    }
    document.getElementById("changeSize").disabled = false;
    document.getElementById("genBlocks").disabled = false;   
  }