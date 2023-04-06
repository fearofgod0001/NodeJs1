function printInfo(){
    console.log(`웹 브라우저 너비 : ${window.innerWidth}`);
    console.log(`웹 브라우저 높이 : ${window.innerHeight}`);
    console.log(`웹 브라우저 창의 너비 : ${window.outerWidth}`);
    console.log(`웹 브라우저 창의 높이 : ${window.outerHeight}`);
    console.log(`웹 브라우저 창 위쪽 면과 모니터 사이으 ㅣ간격 : ${window.screenTop}/${window.screenY}}`);
    console.log(`웹 브라우저 창 왼쪽 면과 모니터 사이으 ㅣ간격 : ${window.screenLeft}/${window.screenX}}`);
    console.log(`웹 브라우저 창의 스크롤 가로 위치 : ${window.scrollX}`);
    console.log(`웹 브라우저 창의 스크롤 세로 위치 : ${window.scrollㅛ}`);
}

function popup(){
    window.open('https://naver.com',"팝업",'width=400,height=300');
}                                                                                                                                                                                                                                                                                                             


// 웹 브라우저의 스크롤 위치를 특정 좌표로 이동
function sTo(){
    window.scrollTo(100,200);
}

// 현재 위치에서 상대적인 위치로 이동
function sBy(){
    window.scrollBy(100,200);
}