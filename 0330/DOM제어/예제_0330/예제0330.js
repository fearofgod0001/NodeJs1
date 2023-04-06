function addClass(){
    let newItem = document.createElement("li"); //ul아래에 추가할 요소
    let subject = document.querySelector("#subject"); 
    //html 문서에 새로운 텍스트 노드를 만듬 
    let newText = document.createTextNode(subject.value);
    //newText 노드를 요소 노도의 자식 노드로 추가 
    newItem.appendChild(newText); 
    let itemList = document.querySelector("#itemList");
    //insertBefore() 메소드는 DOM요소를 특정 요소의 이전에 삽입.
    itemList.insertBefore(newItem, itemList.childNodes[0]);

    subject.value="";

    let items = document.querySelectorAll("li");
    for(let e of items){
        e.addEventListener("click",function(){
            if(this.parentNode){ // 클릭이벤트가 발생한 요소의 부모노드가 있으면 ..
                this.parentNode.removeChild(this);
            }
        });
    }

}
