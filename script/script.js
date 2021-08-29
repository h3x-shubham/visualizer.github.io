let values = [];

const range = document.querySelector("#range");

const bars = document.querySelector(".bars");
// const body=document.querySelector('body');

const prnt = document.querySelector("#prnt");
const btn = document.querySelector("#visualize");
const rnd = document.querySelector("#randomize");
const drop = document.querySelector("#sorts");
let width = window.innerWidth - 50;
let height = window.innerHeight - 50;

let w=width;
range.value=`${width}`;
range.max=`${width}`;





function swape(a, b) {
  let temp = a.style.height;
  a.style.height = b.style.height;
  b.style.height = temp;
}

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}

function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

createValues();

createBars();
// // bubble();
// console.log();
//window resize width calculator
// window.addEventListener('resize',()=>{
//     width=window.innerWidth;
//     console.log(width);
// });

function disable() {
  btn.disabled = true;
  btn.style.background = "#3d9b9b";
}
function enable() {
  btn.disabled = false;
  btn.style.background = "cyan";
}

prnt.addEventListener("click", () => {
  console.log(values);
});

rnd.addEventListener("click", () => {
  createValues();
  createBars();
  console.log("hello");
});

btn.addEventListener("click", () => {
  disable();
  if (drop.selectedIndex == 0) {
    bubble();
  } else if (drop.selectedIndex == 1) {
    console.log(drop.selectedIndex);
  } else if (drop.selectedIndex == 2) {
    console.log(drop.selectedIndex);
  }
});
drop.addEventListener("change", () => {});

range.addEventListener("input", () => {
  change_range();
});
