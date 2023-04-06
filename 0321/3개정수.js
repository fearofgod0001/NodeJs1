tmp1 = prompt("첫번 째 정수 x : ");
x = parseInt(tmp1);
tmp2 = prompt("두번 째 정수 y :");
y = parseInt(tmp2);
tmp3 = prompt("세번째 정수 z : ");
z = parseInt(tmp3);

function findBig(x,y){
    if(x>y){return x;}
    else{return y;} 
}

function findMin(x,y){
    if(x<y){return x;}
    else{return y;}
}

tmp4  = parseInt(findBig(x,y));
big = parseInt(findBig(tmp4,z));


tmp5 = parseInt(findMin(x,y));
min = parseInt(findMin(tmp5,z));


document.write("가장 큰 숫자는 " + big +"<br>");
document.write("가장 작은 숫자는 " + min);
