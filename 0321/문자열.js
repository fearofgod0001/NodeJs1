// let string="Hello, JavaScript !!!!";
// console.log(string);

// let string2 = "저는 이태석 입니다.";
// console.log(string2);

// let string3 = "저는 '진짜' 이태석 입니다.";
// console.log(string3);

// let name1 = "이태석";
// let string4 = `저는 ${name1} 입니다 ㅋ`;
// console.log(string4);

// let addr="경기도 수원시";
// let name2 = "곰돌이";
// console.log("저의 이름은 " + name2 + "이고, 주소는 " + addr +"입니ㅏㄷ.");

// let 인사말 = "안녕하세요. \"곰돌이사육사\" 님 .";
// console.log(인사말);

// let dan = 3;
// let gugu =8;
// let rst = `${dan} 곱하기 ${gugu}는 ${dan * gugu} 입니다.`
// console.log(rst);

//숫자형 (Number) : 자바스크립트는 정수와 실수를 구분 하지 않고 전부 하 나의 숫자 자료형으로 취급

let num1 = 10;
let num2 = 0.1;
console.log(num1 + num2);

// toString() : 숫자형 데이터를 문자형 데이터로 변환해주는 함수.
let x = 123;
x.toString();
console.log(x);

// 논리형  : 참과 거짓을 구분 (true / false)
let age = 20;

let isAdult = (age > 18) ? true : false;
if(isAdult)console.log("당신은 성인입니다.");
else console.log("당신은 미성년자 입니다.");

// undefined : 변수와 상수를 선언하면 생성한 저장 공간에 데이터를 항당하는 것이 일반적인데
// 할당이 되지 않으면 임시적으로 undefined상태로 만듬.

