const canvas = document.getElementById("jscanvas")
const ctx = canvas.getContext("2d")

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c"
ctx.LineWidth = 2.5;

Let painting = false; 

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.LineTo(x, y);
        ctx.stroke()
    }
}

function onMouseDown(event) {
    painting = true;
}


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseLeave", stoppainting);
}