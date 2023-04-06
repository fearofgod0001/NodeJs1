let result=false;
let result1=false;
let result2=false;
let result3=false;
let dis = document.getElementById("lastCheck");
dis.disabled=true;

function idCheck(){
    let targetStr = document.getElementById("id").value;
    console.log(targetStr);
    const regex = /[a-z0-9]{8,20}$/;
    result = regex.test(targetStr);
    console.log(result);
        if(result===false){
            document.getElementById("idSpan").innerText="양식이 맞지 않습니다.";
        }else{
            document.getElementById("idSpan").innerText="";
        };



        
}

function pwdCheck(){
    let targetStr1 = document.getElementById("pwd").value;
    console.log(targetStr1);
    const regex1 = /[a-zA-Z0-9]{8,20}[\!\@]$/;
    result1 = regex1.test(targetStr1);
    console.log(result1);
        if(result1===false){
            document.getElementById("pwdSpan").innerText="양식이 맞지 않습니다.";
        }else{
            document.getElementById("pwdSpan").innerText="";
        };
}

function mailCheck(){
    let targetStr2 = document.getElementById("email").value;
    console.log(targetStr2);
    const regex2 = /[0-9a-zA-Z]*@[0-9a-zA-Z]*.[a-zA-Z]{2,3}$/;
    result2 = regex2.test(targetStr2);
    console.log(result2);
        if(result2===false){
            document.getElementById("emailSpan").innerText="양식이 맞지 않습니다.";
        }else{
            document.getElementById("emailSpan").innerText="";
        };
}

function pNumCheck(){
    let targetStr3 = document.getElementById("pNum").value;
    console.log(targetStr3);
    const regex3 = /\d{3}-\d{4}-\d{4}$/;
    result3 = regex3.test(targetStr3);
    console.log(result3);
        if(result3===false){
            document.getElementById("pNumSpan").innerText="양식이 맞지 않습니다.";
            dis.disabled = true;
        }else{
            document.getElementById("pNumSpan").innerText="";
            dis.disabled =false;
        };
    

}



// document.addEventListener("DOMContentLoaded",function(){
//     let targetStr3 = document.getElementById("pNum").value;
//     console.log(targetStr3);
//     const regex3 = /\d{3}-\d{4}-\d{4}$/;
//     result3 = regex3.test(targetStr3);
//     console.log(result3);
//         if(result3===false){
//             document.getElementById("pNum").placeholder="양식을 맞춰주세요123zz.";
//             dis.disabled = true;
//         }else{
//             document.getElementById("pNumSpan").innerText="";
//             dis.disabled =false;
//         };    
// })

window.onload=function() {
    let targetStr3 = document.getElementById("pNum").value;
    console.log(targetStr3);
    const regex3 = /\d{3}-\d{4}-\d{4}$/;
    result3 = regex3.test(targetStr3);
    console.log(result3);
        if(result3===false){
            document.getElementById("pNum").placeholder="양식을 맞춰주세요123zz.";
            dis.disabled = true;
        }else{
            document.getElementById("pNumSpan").innerText="";
            dis.disabled =false;
        };
    
}





