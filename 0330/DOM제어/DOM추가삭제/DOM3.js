//노드 추가/삭제 하기 : DOM 트리에 새로운 노드를 생성하고, 기존 DOM 트리에 연결
const aEl =document.createElement("div");
// <기준노드>.appendChild(추가할 자식 노드);
document.body.appendChild(aEl);
aEl.innerText="Test";

// div 태그 생성하고 하위에 리스트 추가 하기(5개 이상) (ui와 li 태그 사용)
// 메뉴 리스트 
// - 돈까스
// - 오무라이스
// - 짜장면

let menuList = document.createElement("ul");
let menuItem1 = document.createElement("li");
let menuItem2 = document.createElement("li");
let menuItem3= document.createElement("li");
let menuItem4= document.createElement("li");
menuItem1.innerText="돈까스";
menuItem2.innerText="오무라이스";
menuItem3.innerText="짜장면";
menuItem4.innerText="짬뽕";

menuList.appendChild(menuItem1);
menuList.appendChild(menuItem2);
menuList.appendChild(menuItem3);
menuList.appendChild(menuItem4);

let menuEl = document.querySelector("#menu");
menuEl.appendChild(menuList);

// function deleteMenu(){
//     menuList.removeChild(menuItem1);
//     menuList.removeChild(menuItem2);
//     menuList.removeChild(menuItem3);
//     menuList.removeChild(menuItem4);
// }