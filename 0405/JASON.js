//JSON은 자바스크립트 객체를 문자열로 표현하는 데이터 포맷 입니다.
//JSON을 사용하면 객체를 직렬화 할 수 있습니다.
//원래는 자바스크립트 언어로부터 파생되어 있지만 현재는 언어의 독립적으로 사용 됩니다.
//JSON 은 두가지 기본 자료 구조인 객체와 배열을 기반하며, 웹서버와 웹 어플리케이션 간의 데이터 교환에 사용

//객체 리터럴

const person={
    name : "이태석",
    age : 18,
    addr : "서울 특별시"
}
//JSON형식
//해당 데이터의 입력은 주로 ajax, Fetch API , Promise, Axios 등의 비동기 통신으로 부터 전달 받음.
const jsonString = '{"name": "이태석", "age": 21, "city":"서울시 강남구"}';
const jsonObject = JSON.parse(jsonString); // JSON => 객체 리터럴로 반환
console.log(jsonObject.name);
console.log(jsonObject.age);
console.log(jsonObject.city);

//자바스크립트 객체를 JSON 문자열로 변환하기
let memberInfo = [
    {
        name : "이태석",
        age : 32,
        job : "손유정남친",
        addr : "서울시 강남구"
    },    
    {
        name : "손유정",
        age : 26,
        job : "이태석여친",
        addr : "용인시 기흥구"
    },    
    {
        name : "버찌",
        age : 2,
        job : "고양이",
        addr : "서울시 강남구"
    }
];    

let json = JSON.stringify(memberInfo);
console.log(json);

