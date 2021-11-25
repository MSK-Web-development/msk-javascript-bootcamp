async function quickSort(delay) {

  let blocks = document.querySelectorAll(".block");

  if(blocks.length > 250)
    delay = delay/8;

    // disable menu
    disableMenu();

    // reset results section
    document.getElementById("result").innerHTML = '';
    let result = document.getElementById("result");
    let res = document.createElement('h3');

    // check array is sorted or not
    let arr = [];
    for(i=0;i<blocks.length;i++){
      arr.push(Number(blocks[i].childNodes[0].innerHTML));
    }

    if(isSorted(arr)){ 

      res.innerHTML = 'Array is already Sorted!!';
      result.appendChild(res);
      
      // enable menu
      enableMenu();
    
    } else {

        res.innerHTML = 'Quick Sorting Started...';
        result.appendChild(res);

        var start = performance.now();

        var stack = [];
        var l = 0;
        var h = blocks.length-1;
      
        stack.push(l);
        stack.push(h); 
      
        while (stack.length > 0) { 
            let h = stack.pop();
            let l = stack.pop();
      
            let p; 
            let x = Number(blocks[h].childNodes[0].innerHTML);
            let i = (l - 1); 

            blocks[h].style.backgroundColor = "#FF4949";
            await new Promise(resolve =>
              setTimeout(() => {
                resolve();
              }, delay)
            );
            blocks[h].style.backgroundColor = "#58B7FF";

            for (let j = l; j <= h - 1; j++) {                 
                
                if (Number(blocks[j].childNodes[0].innerHTML) <= x) { 
                    i++; 
                    await swap(blocks[i], blocks[j]); 
                    blocks = document.querySelectorAll(".block");
                } 
            } 

            blocks[i+1].style.backgroundColor = "#FF4949";
            blocks[h].style.backgroundColor = "#FF4949";

            await swap(blocks[i + 1], blocks[h]); 
            blocks = document.querySelectorAll(".block");

            await new Promise(resolve =>
              setTimeout(() => {
                resolve();
              }, 5*delay)
            );

            blocks[i+1].style.backgroundColor = "#58B7FF";
            blocks[h].style.backgroundColor = "#58B7FF";

            blocks[i+1].style.backgroundColor = "#13CE66";
            blocks[h].style.backgroundColor = "#13CE66";
            
            if(i>0 && h>1){
              blocks[i].style.backgroundColor = "#13CE66";
              blocks[h-1].style.backgroundColor = "#13CE66";
            }
            p = (i + 1);      

            if (p - 1 > l) {  
                stack.push(l);
                stack.push(p-1);
            } 
            
            if (p + 1 < h) { 
                stack.push(p+1);
                stack.push(h);
            } 
        } 

        res.innerHTML = res.innerHTML + ` Sorting Complete!!`;
        let end = performance.now();
        let time = document.createElement('p');
        time.innerHTML = `Time taken: ${((end-start)/1000).toFixed(4)} Sec `;
        res.appendChild(time);

        // enable menu and remove highlight
        enableMenu();
      }
  }