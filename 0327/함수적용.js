// 내답
function calc(fstNum,sndNum,cal){
 switch(cal){
    case "+" : return fstNum+sndNum; break;
    case "-" : return fstNum-sndNum; break;
    case "*" : return fstNum*sndNum; break;
    case "/" : return fstNum/sndNum; break;
 }
}

document.getElementById("button1").onclick=function(){
    document.getElementById("result").innerHTML=calc(Number(document.getElementById("num1").value,),Number(document.getElementById("num2").value),document.getElementById("cal").value);
};




//강사님 답
function calcu(){
    const num1=Number(document.getElementById("num1").value);
    const num2=Number(document.getElementById("num2").value);
    const cal=document.getElementById("cal").value;
    let resu;
    switch(cal){
       case "+" : resu = num1+num2; break;
       case "-" : resu = num1-num2; break;
       case "*" : resu = num1*num2; break;
       case "/" : resu = num1/num2; break;
    }
    document.getElementById("result").innerText=`Result ${resu}`;
}