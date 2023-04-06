// 객체 생성 : 
const xhr = new XMLHttpRequest();
// xhr.open("POST","URL 경로"); //ip 주소,port 번호 , 백앤드가 수신할 컨트롤러   
xhr.open("POST","https://jsonplaceholder.typicode.com/posts"); 
// GET POST 방식 두가지가 대표적이다.
// GET : 요청 할 때 '회원 정보를 줘'  보통 양식은 없고 뒤에 나오는 양식을 따른다.
// POST :  회원 가입을 할 때

xhr.setRequestHeader("content-type","application/json");
const data={
    id: "asd",
    pwd : "xasd",
    name : "이태석",
    age : 32,
    addr : "서울시 강남구"

}


xhr.send(JSON.stringify(data)); //XMLHttpRequest 객체를 사용하여 서버로 http 요청을 보내는 메서드
//XMLHttpRequest 객체를 사용하여 서버로부터 http 응답을 받았을 때 호출되는 콜백 함수를 설정하는 프로퍼티
xhr.onload = () => {
    if(xhr.status ===201){
        //정상적으로 응답 되면 status가 201
        const res = JSON.parse(xhr.response);
        console.log(res); //100개의 데이터를 받아 옴
    }else{
        //에러 발생
        console.error(xhr.status,xhr.statusText);
    }
}; 

// const data={
//     id:100,
//     title : "비동기 통신 연습 하기",
//     author : "이태석"
// };

// xhr.send(JSON.stringify(data)); //데이터를 전송 send open에 URL경로에 지정하면 된다.