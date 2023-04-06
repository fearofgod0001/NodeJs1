//getElementById("id") : id 속성값과 일치하는 요소 노드 1개만 선택
const el = document.getElementById("title");
console.log(el);
// getElementsByClassName("클래스") : class 속성값과 일치하는 요소 노드 모두 ㅅㅌ
//여러개의 요소 노드가 선택되며 배열과 유사한 형태로 관리 됨
const classEI = document.getElementsByClassName("text");
console.log(classEI[1]);

for(let el of classEI){
    console.log(el);
}

// getElementByTagName("태그명") : 태그명과 일치하는 요소 노드 모두를 선택
const tagEI = document.getElementsByTagName("p");
for(let el of tagEI){
    console.log(el);
}


// CSS 선택자로 사용하기 : query메소드(querySelector, querySelectorAll)
const qEI = document.querySelector(".box-1");
console.log(qEI);

const qEIS = document.querySelectorAll(".box-1.text");
console.log(qEIS[0]);
console.log(qEIS[1]);

//----------------------------
// 노드 조작하기
// textContent : 요소 노들의 모든 텍스트에 접근
// innerText : 요소 노드의 텍스트 중 웹 브라우저에 표시 되는 텍스트 접근
// innerHTML : 요소 노드의 텍스트 중 HTML 태그를 포함한 텍스트 접근
let txtCont = document.getElementById("title2").textContent;
let inText = document.getElementById("title2").innerText;
let inHtml = document.getElementById("title2").innerHTML;
console.log(txtCont);
console.log(inText);
console.log(inHtml);


// 스타일 조작하기 : 선택된 노드의 스타일(CSS) 지정하거나 변경
const sEl = document.querySelectorAll("p");
for(let el of sEl){
    el.style.backgroundColor="red";
    el.style.fontSize="56px";
    el.style.color="white";
}

sEl.style.backgroundColor="red";
sEl.style.fontSize="56px";
sEl.style.color="white";
w