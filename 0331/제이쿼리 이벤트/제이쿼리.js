// let colorBtn = document.getElementById("colorButton");
// let colors=["red","orange","yellow","green","blue","navy","purple"];
// let colorInx = 0;

// colorBtn.addEventListener("click", function(){
//     document.body.style.background = colors[colorInx];
//     colorInx = (colorInx +1)% colors.length;
// });

$(document).ready(function() {
    let colors=["red","orange","yellow","green","blue","navy","purple"];
    let colorInx = 0;

    $("#colorButton").click(function(){
        $("body").css("background-color", colors[colorInx]);
        colorInx = (colorInx + 1) % colors.length;
    });
})