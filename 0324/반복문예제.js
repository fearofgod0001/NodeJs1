//고객이 구입 가능한 음료리스트 구하기

let drinkList = [
    {name:"레쓰비", price:700},
    {name:"콜라", price:2200},
    {name:"제로콜라", price:2100},
    {name:"펩시", price:1900},
    {name:"제로펩시", price:1800},
    {name:"봉봉", price:800}
];

let inputCoin = 800;
let len = drinkList.length; //배열의 길이
let outputList = [];
for(let i = 0; i<drinkList.length;i++){
    if(drinkList[i].price <=inputCoin){
        outputList.push(drinkList[i]);
    }    
}

console.log(outputList);