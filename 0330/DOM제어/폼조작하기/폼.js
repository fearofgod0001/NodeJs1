// 폼 요소의 시작은 항상 form태그 입니다.
// 폼 요소는 input, select, button 태그 등이 있습니다.

// let id = document.forms.id.value;
// let pwd = document.forms.pw.value;

// console.log(id);
// console.log(pwd);


// document.forms.id.value = "이태석"
// document.forms.pw.value = "이태석"


function inputCall(){
let id = document.frm.id.value;
let pwd = document.frm.pw.value;
let desc = document.frm.desc.value;

}

//체크박스 다루기 : c체크박스도 value 속성으로 값을 가져 올 수 있음.
const checkEl = document.querySelectorAll("[type='radio']")
for(let e of checkEl){
   if(e.value === "orange") e.checked = true;
}

// 콤보박스 다루기
const optionEl = document.querySelectorAll("option")
for(let e of optionEl){
   if(e.value === "banana") 
   e.selected = true;
}

//파일 업로드
function upload(){
   const filePath = document.frm1.upload.files;
   console.log(filePath)
}
