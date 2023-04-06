// let btn = document.querySelector("#myButton");
// btn.addEventListener('click',callBtn);

// function callBtn(){
//     console.log("Button이 눌러졌습니다.");
// }


//클로저 : 자바스크립트 클로저는 함수가 해당 스코프 외부에 있는 변수에 접근할 수 있는 로직
//count 변수는 makeCounter() 함수 내에서 정의 되어 있지만 
function makeCounter(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    };
}

const counter = makeCounter();
counter();
counter();
counter();
  