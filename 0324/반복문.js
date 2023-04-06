let brands = ["애플","구글","페이스북","아마존","삼성전자"];
for(let i=0; i<brands.length; i++){
    // console.log(brands[i]);
}

//for of : 배열이나 객체를 손회, 자바의 향상된 for문과 유사
for(let brand of brands){
    // console.log(brand);
}


//for ~in : 객체의 프로퍼티를 열거 할 떄 사용하는 반복문
let person = {
    fname : "john",
    lname : "doe",
    age : 25
};

for(let key in person){
    console.log(person[key]);
};

