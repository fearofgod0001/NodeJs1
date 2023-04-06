const SEAT_COUNT =10;
const SEAT_PRICE = 12000;
const seats = new Array(SEAT_COUNT).file(0); //10개의 배열을 0으로 초기화  하면서 생성
let total = 0; //총금액

function printSeats(){
    const seatsDiv = document.querySelector("#seats");
    seatsDiv.innerHTML="";
    for(let i =0; i < SEAT_COUNT; i++){
        const seat = document.createElement("div");
        seat.classList.add("seat");
        if(seats[i]===1){
            seat.classList.add("booked");            
        }
        seat.textContent = i+1;
        seat.addEventListener("click", ()=>bookSeat(i))
        seatsDiv.appendChild(seat);
        
    }
}

function bookSeat(index){
    if(seats[index] === 1 ){
        alert("이미 예매가 완료된 좌석입니다.");
    } else{
        seats[index] = 1;
        total += SEAT_PRICE;
        alert("예매가 완료되었습니다.")
    }
}



function exitProgram(){
    alert(`총 매출액은 ${total}입니다.`);
    window.close();
}


document.addEventListener("DOMContentLoaded", () =>{
    printSeats();
    const exitBtn = document.querySelector("#exitBtn");
    exitBtn.addEventListener("click",exitProgram);
});