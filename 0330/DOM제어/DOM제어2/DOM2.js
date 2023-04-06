//클래스 속성 조작 하기
// const el = document.querySelector("#text");
//classList : 선택한 요소 노드의 class 속성을 지정할 때 사용(add(), remove())
// el.classList.add("active", "red-color");
// el.classList.remove("active");

// 메소드 속성으로 조작하기 : 모든 속성을 전체적으로 변경 할 수 있음
// .getAttribute("속성명") :  속성값을 가져 옴
// .getAttribute("속성명", "속성값") : 속성값을 설정
// .removeAttribute("속성명") : 속성을 삭제
const aEl = document.querySelector("a");
const href = aEl.getAttribute("href");
console.log(href);
aEl.setAttribute("href","https://kakao.com");
aEl.innerHTML="카카오";
