const canvas = document.getElementById('canvas');
const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');
const siz = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const erase = document.getElementById('eraser');
const saveEL = document.getElementById('save')


/**
 * .getContext return a drawing context on the canvas,or null if the context identifier is not supported, or the canvas has already been set to a different context mode.
 *  @param {alphaNumerical} 2d/ 3d represent context type
 * 
 * visit : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D for more functionalties
 */


const ctx = canvas.getContext('2d');

let size = 5;
isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

canvas.addEventListener('mousedown', (e)=>{
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;

});

canvas.addEventListener('mouseup', ()=>{
    isPressed = false;
    let x = undefined;
    let y = undefined;

});

canvas.addEventListener('mousemove', (e)=>{
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});


function drawCircle(left_margin, top_margin ){
    ctx.beginPath();

    ctx.arc(left_margin, top_margin, size, 0 , Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x, y, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

inc.addEventListener('click', ()=>{
    size += 5;
    if(size >= 50)
        size = 50;
    updateSizeOfBrush();
});

dec.addEventListener('click', ()=>{
    size -=5;

    if(size <= 5)
        size = 5;
    updateSizeOfBrush();
});

function updateSizeOfBrush(){
    siz.innerText = size;
}

colorEl.addEventListener('change', (e)=>{
    color = e.target.value;
})

erase.addEventListener('click', ()=>{
    color = '#f5f5f5';
});

clearEl.addEventListener("click", ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Convert canvas to image
saveEL.addEventListener('click', ()=>{
   var canva = document.querySelector('canvas');

    var dataURL = canva.toDataURL();

    downloadImage(dataURL, 'my-canvas.jpeg');
});

// Save | Download image
function downloadImage(data, filename = 'untitled.jpeg') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}