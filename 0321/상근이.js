let hour;
let min;


hour = prompt("시간을 입력하세요 : ");
s_hour = parseInt(hour);
min = prompt("분을 입력하세요 : ");
s_min = parseInt(min);


if(s_min<45){
    s_hour= parseInt(s_hour- 1);
    s_min = parseInt(s_min + 15);
}
if(s_hour<0){
    s_hour=parseInt(s_hour + 24);
}


document.write("알림 설정시간은" + s_hour +"시" + s_min +"분 입니다.");