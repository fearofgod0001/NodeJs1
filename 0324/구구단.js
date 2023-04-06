
for(i = 2; i<=9; i++){
    document.write("<table>");
    
    let e = i;
    for(j = 1; j <=9; j++){
        let a = e * j;
        document.write("<tr><td>");
        
        // document.write(e+" X " + j + " = " + e*j);
        document.write(`&nbsp;${e} X ${j} = ${a}&nbsp;`);
        document.write("</td></tr>");
    } document.write("</table>");
};


