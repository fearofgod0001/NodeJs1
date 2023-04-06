//정규 표현식(regular expression) : 문자열에 포함된 특정 문자 조합을 찾기 위해 사용되는 패턴 입니다.
//const regexp = /World/;
//const regexp = new RegExp("World"); 
let str = "Hello World! World!";
const re = /World/;
console.log(re.test(str)); // 해당 문자열의 포함 여부 확인
console.log(str.search(re)); // 해당 문자열이 시작 위치를 반환

// exec() 메소드 : 인수로 전달 된 문자열에서 특정 패턴을 검색하여, 패턴과 일치하는 문자열 반환
// 만약에 패턴과 일치하는 문자열이 없으면 null을 반환
let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
let firstRst = /가장+/.exec(targetStr); // 패턴과 일치하는 문자열이 여러개인 경우
let secondRst = /가장큰+/.exec(targetStr);
console.log(firstRst);
console.log(secondRst);

// test()메소드 : 인수로 전달된 문자열에서 특정 패턴과 일치하는 문자열이 있는지 검사
// 문자열이 있으면 true, 없으면 false
let targetStr1 = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
let firstRst1 = /가장+/.test(targetStr1); // 패턴과 일치하는 문자열이 여러개인 경우
let secondRst1 = /가장큰+/.test(targetStr1);
console.log(firstRst1);
console.log(secondRst1);

//전화번호 검사하기
// \d : 숫자를 의미
// {} : 괄호 안의 숫자는  개수
let inputNum = "010-5006-4146";
const regex = /\d{3}-\d{4}-\d{4}$/;
let rst = regex.test(inputNum);
console.log(rst);

// 전화 번호 추출하기 : match() - 주어진 문자열의 처음부터 패턴 매칭을 수행
const inputText = "안녕하세요. 제 번호는 010-5006-4146 입니다. 010-7522-8291 연락 주세요";
const regex1 = /\d{3}-\d{4}-\d{4}/;
let regNumber = inputText.match(regex1);
console.log(regNumber[0]);

// 전화번호 여러개 추출하기(g)
// \d{2,3} : 숫자 2~3개로 시작 
// g : 매칭되는 모든 항목 찾기
const inputText1 = "안녕하세요. 제 번호는 010-5006-4146 입니다. 010-7522-8299 연락 010-5763-5279 주세요";
const regex2 = /\d{3}-\d{4}-\d{4}/g;
let regNumber1 = inputText1.match(regex2);

for(let num of regNumber1){
    console.log(num);
}

//정규식 주요 패턴에 대한 사용예제
const regex3 = /오늘의/; //단순 글자 찾기
const regex4 = /010/g // 모두 찾기 
const regex5 = /[a-zA-Z]/g; //모든 알파벳 대소문자 찾기
const regex6 = /[^0-9]/g; //0-9가 아닌 모든 것을 찾음
const regex7 = /[ㄱ-ㅎ가-힣]/g; //0-9가 아닌 모든 것을 찾음
const inputText2 = "abcdABCD 안녕하세요 제 번호는 010-7522-8299 02-584-8299 입니다.";
let rst1 = inputText2.match(regex7);
console.log(rst1);

//웹 사이트 주소 정규식 검사하기
// http:// 나 https:// 로 시작하고 알파벳 언더스코어 하이픈 닷 으로 이루어져 있음.
// https?:\/\/[\w\-\.]+/g
const text = "구입문의는 : http://gogumarket.com https://google.com 010-5006-4146 입니다.";
const regex8 = /https?:\/\/[\w\-\.]+/g;
let rst2 = text.match(regex8);
console.log(rst2);
