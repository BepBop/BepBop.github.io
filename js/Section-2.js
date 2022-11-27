let first_child_child = document.getElementById("first-child-child");
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

//
// let fps = 1000 / 60;
// let time = (new Date()).getTime();
// let speed = 10;

// var opacity = 100;
// function fadeOut() {
//   opacity--;
//   div.style.opacity = opacity/100;
//   if (opacity > 0){
//     requestAnimationFrame(fadeOut);
//   }
// }
// requestAnimationFrame(fadeOut);
//
// y=0;
//
// let timer = setInterval(function() {
//
//   y = y + 10;
//   x.style.backgroundPositionX = `${y}px`;
//
// }, 20);

function fun() {

  y = y+2;
  x.style.backgroundPositionX = `${y}px`;
  requestAnimationFrame(fun);
}

requestAnimationFrame(fun);
