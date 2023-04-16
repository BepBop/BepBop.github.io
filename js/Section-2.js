const x = document.getElementById("test");

let y = 0;

function fun() {
    y = y + 2;
    x.style.backgroundPositionX = `${y}px`;
    requestAnimationFrame(fun);
}

requestAnimationFrame(fun);
