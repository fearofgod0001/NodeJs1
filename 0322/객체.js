// 배열 : 자바스클비트의 배열은 모든 자료형으로 
let score = [80,99,77,65];
console.log(score);
console.log(score[2]); //배열은 인덱스 요소로 접근 함(인덱스는 항상 0 부터 시작)
//let은 변수를 만드는 키워드 입니다. 자바스크립트는 변수를 만들 때 자료형을 지정 하지 않으며 값이 대입 될 때 데이터 형이 결정 됨
let array= ["아이브", "안유진",21,true,[100,99,88],1010,"1010"];

console.log(array);
console.log(array[0]);

console.log(array[4]);
console.log(array[4][1]);
console.log(array[0][1]);


// 빈 배열 생성 후 동적으로 값을 대입
let arr = [];
arr[0] = 100;
console.log(arr);

// 객체 리터럴 : 중괄호{} 를 사용해서 정의하고, 키와 값이 한쌍으로 이루어 집니다.
let score1=[80,99,77,65];

let score2 = {
     kor : 80,
     eng : 99,
     mat : 77
};

console.log(score2);
//.(도트)를 사용해서 접근 하는 방법

console.log(score2.eng);
//.[]키 명을 넣어서 접근 하는 방법

console.log(score2['mat2']);

score2.eng=100;
console.log(score2.eng);

const person= {
    name : "이태서",
    age : 18,
    city : "Night City",
    // 객체 리터럴에서 함수 사용
    getInfo : function(){
        return `${this.name} is ${this.age} years old and lives in ${this.city}.`;
    }
}

console.log(person.getInfo());

// typeof : 데이터형을 확인하는 예약어
let name = "이태석";
console.log(typeof(name));

//toString() : 배열 안의 모든 문자를 쉼표를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits.toString());
console.log(fruits);
