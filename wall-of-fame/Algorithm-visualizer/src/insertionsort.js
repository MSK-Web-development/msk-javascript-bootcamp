async function insertionSort(delay) {
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
  
                res.innerHTML = 'Insertion Sorting Started...';
                result.appendChild(res);
  
                var start = performance.now();

                for (let i = 1; i < blocks.length; i++) {
                    for (let j = i; j > 0 && Number(blocks[j].childNodes[0].innerHTML) < Number(blocks[j-1].childNodes[0].innerHTML); j--) {
                        
                        blocks[j].style.backgroundColor = "#FF4949";
                        blocks[j-1].style.backgroundColor = "#FF4949";
                        
                        await new Promise(resolve =>
                          setTimeout(() => {
                            resolve();
                          }, 2*delay)
                        );

                        await swap(blocks[j], blocks[j - 1]);
                        blocks = document.querySelectorAll(".block");
                        
                        blocks[j].style.backgroundColor = "#58B7FF";                        
                        blocks[j-1].style.backgroundColor = "#58B7FF";
                    }
                }

                for(let i=0;i<blocks.length;i++){
                    blocks[i].style.backgroundColor = "#13CE66";
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