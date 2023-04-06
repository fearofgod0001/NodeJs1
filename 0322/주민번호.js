// 길이 체크 , 하이픈이 있는지 체크
// 성별 확인 123456-1234567
// 현재년도 - 태어난 년도 = 나이
// 문자열에서 해당 문자 추출은 charAt(n)
// 문자열 잘라내기 substring(0,2) 0 부터 2미만 잘라냄
// 날짜 객체를 만드는 방법도 자바와 동일

let idNum = prompt("주민번호를 입력하세요 : ")
let sex, age;

if(idNum.indexOf('-') >=0 && idNum.length == 14){
    if(idNum.charAt(7) == "1" || idNum.charAt(7) == "3"){sex = "남성";}
    else {sex = "여성";}

    let today = new Date();
    age = Number(today.getFullYear()) -  Number(idNum.substring(0,2)) - 1900;

    document.write(`<p class="box">성별은 ${sex} 입니다.<br>`);
    document.write(`나이는 만 ${age} 살 입니다.</p>`);

}else{
    document.write("- 가 빠졌거나 14자리가 아닙니다. 다시 입력하세요  ");
}
