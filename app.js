const canvas = document.getElementById("jscanvas")

Let painting = false; 

function stoppainting(){
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.pffsetY;
}

function onMouseDown(event) {
    painting = true;
}

function onMouseUp(event){
    stoppainting();
}


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stoppainting);
}