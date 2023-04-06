function avgMake(){
    const scores = [];
    let total=0;
    for(let i =0; i<5;i++){
        const score=parseInt(document.getElementById("num"+(i+1)).value);
        scores[i]=score;
    }

    for(let i=0;i<scores.length;i++){
        if(scores[i] < 40)scores[i] = 40;
        total+= scores[i];
    }

    let avg = total/5;
    document.getElementById("avg").innerHTML=avg;

    console.log(scores[0]);
    console.log(scores[1]);
    console.log(scores[2]);
    console.log(scores[3]);
    console.log(scores[4]);
    console.log(total);
    console.log(avg);
}

