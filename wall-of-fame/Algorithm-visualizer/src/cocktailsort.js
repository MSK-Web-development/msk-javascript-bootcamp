async function cocktailSort(delay) {
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
        var arr = [];
        for(i=0;i<blocks.length;i++){
          arr.push(Number(blocks[i].childNodes[0].innerHTML));
        }
  
        if(isSorted(arr)){
  
            res.innerHTML = 'Array is already Sorted!!!';
            result.appendChild(res);
            
            // enable menu
            enableMenu();
  
        } else {
  
                res.innerHTML = 'Cocktail Sorting Started...';
                result.appendChild(res);
  
                let startTime = performance.now();

                let swapped = true; 
                let start = 0; 
                let end = blocks.length - 1; 
              
                while (swapped) { 
                    swapped = false; 
            
                    for (var i = start; i < end; i++) { 
                        blocks[i].style.backgroundColor = "#FF4949";
                        if (Number(blocks[i].childNodes[0].innerHTML) > Number(blocks[i+1].childNodes[0].innerHTML)) { 
                            await new Promise(resolve =>
                                setTimeout(() => {
                                    resolve();
                                }, 0.01*delay)
                            );
                            await swap(blocks[i], blocks[i + 1]); 
                            blocks = document.querySelectorAll(".block");
                            swapped = true; 
                        } 
                        blocks[i].style.backgroundColor = "#58B7FF";
                    } 
            
                    if (!swapped) 
                        break; 
                    
                    await new Promise(resolve =>
                        setTimeout(() => {
                            resolve();
                        }, 0.01*delay)
                    );
            
                    swapped = false; 
            
                    blocks[end].style.backgroundColor = "#13CE66";
                    --end; 
            
                    for (var j = end - 1; j >= start; j--) { 
                        blocks[j].style.backgroundColor = "#FF4949";
                        if (Number(blocks[j].childNodes[0].innerHTML) > Number(blocks[j+1].childNodes[0].innerHTML)) { 
                            await new Promise(resolve =>
                                setTimeout(() => {
                                    resolve();
                                }, 0.01*delay)
                            );
                            await swap(blocks[j], blocks[j + 1]); 
                            blocks = document.querySelectorAll(".block");
                            swapped = true; 
                        } 
                        blocks[j+1].style.backgroundColor = "#58B7FF";
                    } 
            
                    blocks[start].style.backgroundColor = "#13CE66";
                    ++start; 
                } 
                blocks.forEach(function(el,index){
                    blocks[blocks.length -1 - index].style.backgroundColor = "#13CE66";
                })

                
                res.innerHTML = res.innerHTML + ` Sorting Complete!!`;
                let endTime = performance.now();
                let time = document.createElement('p');
                time.innerHTML = `Time taken: ${((endTime-startTime)/1000).toFixed(4)} Sec `;
                res.appendChild(time);
  
                // enable menu and remove highlight
                enableMenu();
  
      }
    }