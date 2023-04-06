const imgClick = document.getElementById("open");


imgClick.addEventListener("click",function(){
   document.getElementById("desc").innerHTML='노는게<br> <button id="classEx">닫기</button>';
        imgClick.style.display="none";
        const imgClick2 = document.getElementById("classEx");

        imgClick2.addEventListener("click",function(){
            document.getElementById("desc").innerHTML="";
            imgClick.style.display="block";
        });
});


