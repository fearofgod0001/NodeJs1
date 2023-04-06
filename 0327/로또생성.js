function rnd(){

    const Arr = [0,0,0,0,0,0];
    for(let i =0; i<Arr.length;i++){
        Arr[i]=Math.floor(Math.random()*99+1);
        for(let j = 0; j < i; j++){
            if(Arr[i] == Arr[j]){
                i--;
            }
        }
    }

    document.getElementById("num1").innerHTML=Arr[0];
    document.getElementById("num2").innerHTML=Arr[1];
    document.getElementById("num3").innerHTML=Arr[2];
    document.getElementById("num4").innerHTML=Arr[3];
    document.getElementById("num5").innerHTML=Arr[4];
    document.getElementById("num6").innerHTML=Arr[5];
}

console.log(Arr);