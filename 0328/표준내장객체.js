//문자열의 길이 체크 : length

const pw = "123";
if(pw.length<4){
    console.log("비밀번호는 최소 4자리 이상 입력해 주세요.")
}

// 특정 문자열의 포함 여부 확인 : includes
const email = "dlxo8888!gmail.com";
if(email.includes("@")===false){
    console.log("올바른 이메일 형식이 아닙니다.");
}



const email2 = "@dlxo8888#gmail.com";
if(email2.indexOf("@")===-1){
    console.log("올바른 이메일 형식이 아닙니다.");
}

//찾고자 하는 문자열이 둘 이상 발견되면 제일 마지막에 발견된 문자열의 index를 반환하는 함수
const email3 = "@dlxl8888gmail.com@";
console.log(email3.lastIndexOf("@"));

// slice() : 시작 위치와 종료위치를 주면 문자열에서 해당 부분을 잘라내서 반환, 음수값 허용
let str = "Apple, Banana, Kiwi";
let res = str.slice(7,-1);
console.log(str);
console.log(res);

// substring() : 시작 위치와 종료 위치를 주면 문자열에서 해당 부분을 잘라내서 반환
let str2 = "Apple, Banana, Kiwi";
let res2 = str2.substring(7,-1);
console.log(str2);
console.log(res2);


//replace() : 문자열 내의 특정 문자열을 지정한 문자열로 바꾸는 함수
let str3 = "지구오락실, 이태석1, 이태석2, 이태석3, 이태석3, 이태석1";
let newStr = str3.replace("이태석1","손유정");
console.log(newStr);

//replaceAll() : 문자열 내의 특정 문자열을 지정한 문자열로 모두 바꾸는 함수
let str4 = "지구오락실, 이태석1, 이태석2, 이태석3, 이태석3, 이태석1";
let newStr2 = str3.replaceAll("이태석1","손유정");
console.log(newStr2);

//대소문자 변경
let alpha = "Better late than never.";
console.log(alpha.toUpperCase());
console.log(alpha.toLowerCase());


//concat() : 2개 이상의 문자열을 하나의 문자열로 합치는 함수
let text1 = "안녕";
let text2= "반갑고";
let text3 = text1.concat(" ",text2); 
console.log(text3);

//trim() : 문자열의 앞 뒤 공백을 제거 
let str5 = "이 태 석 정 처     기 합 격    ";
console.log(str5.trim());

//padStart(), padEnd() : 문자열 앞과 뒤에 지정된 길이 만큼 추가하는 함수
let str6 = "555";
str6 = str6.padStart(5,"감"); //총 길이의 수 , 나머지 추가 할 수
console.log(str6);

str7 = str6.padEnd(7,0);
console.log(str7);

// charAt() : 문자열에서 특정 인덱스에 해당하는 문자 하나르 ㄹ반환하는 함수
let addr = "서울시 강남구 역삼동";
console.log(addr.charAt(5));

// charCodeAt() : 문자열의 특정 인덱스에 해당하는 문자의 유니코드를 반환
let uniCode = "Hello World";
console.log(uniCode.charCodeAt(0));

//split() : 특정 문자 기준으로 문자열을 잘라서 새로운 문자열 배열 생성
let birthDay = "1997-06-12";
let arr2 = birthDay.split("-");
console.log(arr2);
