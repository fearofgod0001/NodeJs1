//2개 이상의 배열을 하나의 배열로 결합 :  concat()
let arr5 = ["사과","딸기","참외"];
let arr6 = ["포도","수박","바나나"];
let arr7 = ["키위","망고","오렌지"];
let arr8 = ["복숭아","자두","사과"];
let totFruits = arr5.concat(arr6,arr7,arr8);
console.log(totFruits);

// slice() : 시작 인덱스 부터 종료 인덱스미만 까지의 배열의 요소를 잘라냄
let fruits10 = ["Banana", "Orange", "Apple","Mango","Lemon"];
let slice1 = fruits10.slice(3); //3번째 요소 부터 끝까지
let slice2 = fruits10.slice(1,3); //1번 인덱스에서 3번 인덱스 미만 요소
console.log(slice1);
console.log(slice2);

// sort() : 오름 차순 정렬
fruits10.sort();
console.log(fruits10);

// 내림차순 정렬
fruits10.reverse();
console.log(fruits10);

// filter() : 배열에서 특정 조건을 만족하는 배열의 요소만을 찾아서 새로운 배열 생성
let persons = [
    {
        name : "유재석",
        point : 78,
        city : "서울"
    },
    {
        name : "김종국",
        point : 92,
        city : "서울"
    },
    {
        name : "양세찬",
        point : 76,
        city : "제주"
    },
    {
        name : "하하",
        point : 81,
        city : "인천"
    },
];

let pass = persons.filter(person => person.point > 80);
console.log(pass);


//날짜와 시간을 다루는 Date객체
const date = new Date();
console.log(date);

// 인스턴스 만들기/ 월은 0부터 시작 GMT 기준 시간으로 설정 됨
const date1 = new Date(2022,11,27,18,30,50);
console.log(date1);

const date2 = new Date("2022-12-25/18:30:50");
console.log(date2);

// Date 객체의 메소드 
let myDate = new Date();
// console.log(myDate.getFullYear()); //현재 연도 출력
// console.log(myDate.getMonth()+1);
// console.log(myDate.getDate());
// console.log(myDate.getDay()); //현재 요일 출력
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getTime());//1970 년 1월 1일 0시부어


//Map 객체 : 자바스클비트에서 제공하는 데이터 구조 중 하나로 key-value쌍으로 데이터를 저장관리 합니다.
//Map은 객체와 유사하지만 객체와는 다르게 키에 다양한 자료형을 사용 할 수 있습니다.

let map2 = new Map();
map2.set("name","태석");
map2.set("email","dl88@gmail.com");
map2.set("addr","서울특별시")

console.log(map2.size);
console.log(map2.get("name"));


map2.forEach((item) => {
    console.log(item);
});


//수학 연산을 다루는 math 객체 (자바랑 똑같음)
console.log(Math.abs(-5)); // 출력: 5
console.log(Math.ceil(1.1)); // 출력: 2
console.log(Math.floor(1.9)); // 출력: 1
console.log(Math.round(1.4)); // 출력: 1
console.log(Math.max(1, 2, 3)); // 출력: 3
console.log(Math.min(1, 2, 3)); // 출력: 1
console.log(Math.pow(2, 3)); // 출력: 8
console.log(Math.sqrt(9)); // 출력: 3
console.log(`랜덤함수 ${Math.floor(Math.random()*3+1)}`); // 출력: 0 이상 1 미만의 임의의 수

//응모자 수를 입력받아 당첨자를 발표하는 프로그램 작성
//응모자 수 : 30

let number = prompt("응모자 수를 입력하세요 : ")

document.querySelector("")