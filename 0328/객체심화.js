//객체는 중괄호를 사용하여 만듬 속성(property)과 값(value)의 쌍으로 이루어짐
const person = {
    name :{
        firstName : "태석",
        lastName : "이"
    },
    age : 32,
    isAdult : true,
    printInfo : function(){
        return this.name;
    }
};

console.log(person.name.lastName);
console.log(person.printInfo().firstName);

person.name.firstName="TaeSeok";
person.name.lastName="Lee";
console.log(person.printInfo())
console.log(person.name.lastName);


const carInfo={};
carInfo.name="Santafe";
carInfo.year="2022/09/15";
carInfo.maxSpeed="230km";
console.log(carInfo);

delete carInfo.maxSpeed;
let person2 = {
    name : "이태tjr",
    age : 25,
    sayHello : function(){
        console.log(`Hello , my name is ${this.name}`);
    }
};
person2.sayHello();

//객체 생성자 : 객체 생성자는 템플릿으로 사용하여 동일한,
// 속성과 메소드를 가진 객체를 여러개 생성할 때 사용

function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(`helloe, my name is ${this.name}`)
    };

};

let person3 = new Person("사람3",40);
let person4 = new Person("사람3",40);

person3.sayHello();
person4.sayHello();