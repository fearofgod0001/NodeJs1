     /*마우스에 대한 이벤트*/ 
const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click",function(e){
    console.log("버튼이 눌려졌습니다. : " + e );
    // console.log("x좌표 : " + e.clientX);
    // console.log("y좌표 : " + e.clientY);
    // console.log("마우스가 클릭된 x좌표 : " + e.pageX);
    // console.log("마우스가 클릭된 y좌표 : " + e.pageY);
    // console.log("모니터의 왼쪽 위 모서리를 기준으로 마우스가 클릭 된 : " + e.screenX);
    // console.log("모니터의 왼쪽 위 모서리를 기준으로 마우스가 클릭 된 : " + e.screenY);
   
});

     /*키보드에 대한 이벤트*/ 
const inputEl = document.querySelector("input");
inputEl.addEventListener("keydown", function(event){
    console.log(`keyCode : ${event.keyCode}`);
    console.log(`ctrlKey : ${event.ctrlKey}`);
    console.log(`altKey : ${event.altKey}`);
    console.log(`shiftKey : ${event.shiftKey}`);



});

// 이벤트 취소하기 : html 태그중 일부는 기본으로 이벤트가 적용되어 있습니다.
// 대표적으로 a태그와 form태그가 해당 됩니다.
// target 속성은 이벤트가 발생한 요소를 나타냅니다.(리액트에서 확인 할 예정)
// preventDefault() 메서드를 사용하면 태그에 기본으로 연결된 이벤트를 취소 
const aEls = document.querySelectorAll("a");
for(let e of aEls){
    e.addEventListener("click",function(e){
        // 기본 이벤트 취소
        e.preventDefault();
    });
}

const form = document.getElementById("myForm");
form.addEventListener('submit', function(e){
    // 기본 이벤트 취소
    // e.preventDefault();


});