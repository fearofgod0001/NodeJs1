let date = new Date("2023-07-25");
let now = new Date();

console.log(date);
console.log(now);

let toNow = now.getTime();
let toDay = date.getTime();
let remainTime = toDay - toNow;
remainTime = Math.round(remainTime/ (1000*60*60*24));

document.querySelector('#time').innerText=remainTime;




