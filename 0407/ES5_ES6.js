//ES5
//Array 메소드 : ES5에서 추가 되었으며 코드를 간결하고 효율적으로 만들어줌
// 원본 데이터를 변형 시키지 않음
// forEach() : 배열의 각 요소를 순회하며, 요소에 대해 지정된 함수를 실행하는 메소드
// map() : 배열의 모든 요소를 순회하면서 새로운 배열을 만듭니다.
// filter() : 배열의 요소 중에서 조건을 만족하는 요소만 추출하여 새로운 배열을 만듬.
// reduce() : 배열의 모든 요소를 순회하여, 순회 과정에서 누적값을 사용하여 하나의 결과 값을 만듬.

let numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(num => console.log(num));

let squares = numbers.map(num => num * num);
console.log(squares);

let evenNumbers = numbers.filter(num => num%2 == 0);
console.log(evenNumbers);

let sum = numbers.reduce(function(tot,num){
    return tot + num;
},0);
console.log(sum)

let sum2 = numbers.reduce((tot,num) => tot + num, 0);
console.log(sum2);

// ES6 : 자바스크립트의 6번째 버전, 2015년에 발표 
// 가변 변수와 불변 변수 : let, const
// 자바스크립트도 기본 타입과 객체 타입으로 나누어 지며, 객체 타입의 경우 주소를 가짐
const arr = [1,2,3];
// arr = [4,5,6];
// console.log(arr);
arr[0] = 100;
arr[1] = 200;
arr[3] = 300;
console.log(arr);

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const newArr = arr1.concat(arr2);
console.log(newArr);

// 화살표 함수 : 화살표 함수는 간단하고 간결한 코드 작성하는데 유용
const add = function(x,y){
    return x + y;
}
const add1 = (x,y) => x + y ;

//화살표 함수 사용시 this 문제 해결
//기존의 함수 정의 방식에서 함수 내부에서 this 키워드를 사용 할 때,
//호출되는 위치에 따라 참조하는 객체가 다르게 결정되는 문제가 있음.
//일반 펑션 예제1(미출력)
const obj2 = {
    name : "이태석",
    fucn1(){
        const func2 = function(){
            console.log(this.name);
        }
        func2();
    }};
obj2.fucn1();
//화살표함수 예제1 (정상출력)
const obj = {
    name : "이태석",
    fucn1(){
        const func2 = () =>{
            console.log(this.name);
        }
        func2();
    }};
obj.fucn1();

// const btn = document.getElementById("myButton");
// btn.addEventListener("click", ()=>{
//     console.log(this)
// })

const pEls = document.querySelectorAll("p");
for(let e of pEls){
    console.log(e);
}

pEls.forEach(e => e.addEventListener("click",function(){
    console.log(this);
}))

// 템플릿 리터럴 : 백틱(``)으로 묶는 문자열을 템플릿 리터럴 이라고 한다.
// 템플릿 리터럴은 변수를 쉽게 포함할 수 있고 여러줄의 문자열 쉽게 표시
const name = "이태석";
const seasonMsg = "봄입니다";
const message = "안녕하세요";

console.log(`${message} ${name}님 현재 화창한 날씨의 ${seasonMsg}`)

//전개 연산자(Spread operator) : 배열이나 객체를 개별 요소로 분리
const arr3 = [1,2,3];
const arr4 = [4,5,6];
const arr5 = [...arr3,...arr4];
console.log(arr5);

const arr6 = [1,2,3,4,5,6,7,8,9];
const arr7 = [];
arr7 = [...arr6];
console.log(arr7)

//전개 연산자를 이용한 가변 인수 함수 만들기
function sum2(...numbers){
    return numbers.reduce((tot,num) => tot +num,0);
};
console.log(sum2(1,2,3,4,5,6,7,8,9,10));

const arr8 = [1,2,3,4,5,6,7,8,9,99,999];
const arr9 = [...arr8];
const arr10 = arr9.concat([...arr8]);
console.log(arr9);
console.log(arr10);