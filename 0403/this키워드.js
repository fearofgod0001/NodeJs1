const pEls = document.querySelectorAll("p");
pEls.forEach((el) => {
    el.addEventListener("click",function(){
        if(this.style.color == "red"){
            this.style.color="black";
        }else{
            this.style.color="red";
        }
    })
});