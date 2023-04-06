//이벤트 등록하기 : 이벤트가 발생할 때 어떤 작업을 할 것인지 자바스크립트 코드로 작성하는 것

function clickEvent(){
    alert("인라인 방식으로 구현 된 함수가 호출 되었습니다.");
}

function focusEvent(){
    let inputBox = document.querySelector("#input_box");
    inputBox.style.background = "orange";
}

function blurEvnet(){
    let inputBox = document.querySelector("#input_box");
    inputBox.style.background="green";
}

// 프로퍼티 리스너 방식으로 이벤트 등록하기
const btnEl = document.getElementById("prt_btn");
btnEl.onclick = () => alert("프로퍼티 방식으로 구현된 함수 호출")

// 이벤트 등록 메소드로 이벤트 등록 하기
// <노드>.addEventListener("이벤트타입",함수);
let regBtnEl = document.getElementById("red_btn");
regBtnEl.addEventListener("click",function(){
    alert("이벤트 등록 메소드로 구현된 함수를 호출");
});

function eventFunc(){
    alert("이벤트 등록 메소드로 구현된 함수를 호출");
}