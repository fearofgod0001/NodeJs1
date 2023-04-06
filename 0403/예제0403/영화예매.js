const sitDis = document.getElementById("selectSit");
const sitDis1 = document.getElementById("selectSit2");
const sitDis2 = document.getElementById("selectSit3");
const ticket = document.getElementById("ticketing");
const screen1 = document.getElementById("screen");


ticket.addEventListener("click",function(){
    sitDis.style.display="block";
    sitDis1.style.display="block";
    sitDis2.style.display="block";
    screen1.style.display="flex";
      
    document.getElementById("total").innerHTML=`가격은 0원입니다.`;
});




const ending = document.getElementById("ending");
ending.addEventListener("click",function(){
    sitDis.style.display="none";
    sitDis1.style.display="none";
    sitDis2.style.display="none";
    screen1.style.display="none";
    let sit='input[name="sit"]:checked';
    let chk=document.querySelectorAll(sit); 
 
    let ttl=0;

    chk.forEach((el)=>{
        ttl += Number(el.value);
        
    });
    document.getElementById("total").innerHTML=`가격은 ${ttl}원 입니다.`;
    alert("예매가 완료되었습니다.");
    chk.forEach((el)=>{
        el.checked=false;
        el.disabled=true;        
    });
});