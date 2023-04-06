//산술연산자  : 수학연산을 수행하는 연산자를 의미
let a = 2;
let b = 3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a);
console.log(a%b);
console.log(a ** b); // 2 * 2 * 2 거듭제곱

console.log(--a); //전위 단항 연산자,1
console.log(b++); //후위 단항 연산자,3

//대입 연산자 : 대입연산자와 복합 대입 연산자가 있음
let x = 10;
let y = 20;
x = x + 10; // x에 10을 더해서 x에 다시 대입
x +=10;
console.log(x);
y*=10;
console.log(y);

//비교 연산자 : 피연산자를 비교한 뒤 참or 거짓으로 반환
// 비교연산자느 ㄴ조건문과 결합
// JS는 동등연산자 개념과 일치 연산자라는 개념이있음
// JS 에서는 동등연산자로 두 값을 비교하는 경우 데이트형이 다르면 자동으로 형변환
console.log(1=='1'); //문자열로 변환 후 비교 진행
console.log(1 ==='1'); //일치연산자, 값과 형이 모두 같은지 비교하는 연산자

let val = '100';
if(val !== 100)console.log("100이 아닙니다.")
else console.log("100입니다.")


// 논리연산자 : 항상 비교연산자와 결합되어 사용됩니다.
// &&(and) , ||(or), !(not)
let aa = 10;
let bb = 5;
let cc = 15;
console.log(aa > bb && aa > cc); // false
console.log(aa > bb || aa > cc); // true
console.log(!(aa > bb && aa > cc)); // true
console.log(!(aa > bb || aa > cc)); // false

// 삼항연산자
let num = 7;
const rst = (num % 2 === 0) ?  "짝수입니다" : "홀수";
console.log(rst);

let age = 20;
const isAdult= (age > 18) ? "성인" : "학생";
console.log(isAdult);

// 묵시적 형변환 : 자바스크립트가 자동으로 수행 하는 것
let num1 = 10 + "10";
console.log(num1);

if(10=='10') console.log("값이 같습니다.");

//명시적 형변환 : 개발자가 의도를 가지고 형변환을 하는 것 
let num2 = 10;
let num3 = "10";
console.log(10 + Number(num3));

let num4 =10;
let str = String(num4);
console.log(10 + str);
