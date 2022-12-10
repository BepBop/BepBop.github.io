const first_child_child = document.getElementById("first-child-child");
first_child_child.addEventListener("click", fxn);

let flag = false;

function fxn() {

    if (flag) {
        document.getElementById("icon").src = "img/add.svg";
        flag = !flag;
    } else {
        document.getElementById("icon").src = 'img/close.svg';
        flag = !flag;
    }

}

const x = document.getElementById("test");

let y = 0;

function fun() {
    y = y + 2;
    x.style.backgroundPositionX = `${y}px`;
    requestAnimationFrame(fun);
}

requestAnimationFrame(fun);
