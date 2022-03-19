function disableMenu(){
    document.getElementById("changeSize").disabled = true;
      for (var i = 0; i < algos.length; i++) {
        algos[i].className += " disableClick";
      }
      document.getElementById("genBlocks").disabled = true;
}

function enableMenu(){
    for (var k = 0; k < algos.length; k++) {
        algos[k].className = algos[k].className.replace("disableClick","");
      }
      var current = document.getElementsByClassName("highlight");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" highlight", "");
      }
      document.getElementById("changeSize").disabled = false;
      document.getElementById("genBlocks").disabled = false;
    
}

function isSorted(arr){
  return arr.slice(1).every((item, i) => arr[i] <= item);
}