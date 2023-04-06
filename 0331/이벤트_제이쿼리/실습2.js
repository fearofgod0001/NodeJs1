const btnGreen = document.getElementById("green");
const btnOrange = document.getElementById("orange");
const btnPurple = document.getElementById("purple");

btnGreen.addEventListener("click",function(){
    let inputBox = document.querySelector("#bgcolor");
    inputBox.style.background="green";
})

btnOrange.addEventListener("click",function(){
    let inputBox = document.querySelector("#bgcolor");
    inputBox.style.background="orange";
})

btnPurple.addEventListener("click",function(){
    let inputBox = document.querySelector("#bgcolor");
    inputBox.style.background="purple";
})