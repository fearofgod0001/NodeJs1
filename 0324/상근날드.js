let menu=[];
for(i =0; i< 3;i++){
    menu[i]=Number(prompt("햄버거 가격을 입력하세요 : "));
};

for(i=3;i<5;i++){
    menu[i]=Number(prompt("음료 가격을 입력하세요 : "));
};


let min = menu[0];
let min2 = menu[3];

for(i = 0; i < 3 ; i++){
    if(min > menu[i])min = menu[i];
};
for(i = 3; i < 5 ; i++){
    if(min2 > menu[i])min2 = menu[i];
};



document.write(menu + "<br>");
document.write(`젤 싼 햄버거 ${min}원, 젤 싼 음료 ${min2}원 <br> 세트 값 ${min + min2 - 50}원`);













