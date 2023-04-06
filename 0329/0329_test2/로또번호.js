function make(){
    if(window.event.keyCode==13){
    let number = document.getElementById("number").value;
    console.log(number);
    document.getElementById("con").innerText=Math.floor((Math.random()*number)+1);
    }
}

