let todoCounter=0;
function addTodo(){
    todoCounter=todoCounter+1;
    const todo = document.getElementById("input-todo-area").value;
        
    const container = document.getElementsByClassName("todo-list")[0];
    const newEle =document.createElement('div');
    newEle.setAttribute("id",todoCounter);
    const newSpan = document.createElement('span');
    const newButton = document.createElement("button");
    newSpan.innerHTML=`${todoCounter}. ${todo}`;
    newButton.innerHTML="Delete";
    newButton.setAttribute("onclick",`deleteTodo(${todoCounter})`);
    newEle.appendChild(newSpan);
    newEle.appendChild(newButton);      
    container.appendChild(newEle);
}


// delete function 
function deleteTodo(idx){
    todoCounter--;
    const del = document.getElementById(idx);
    const par= del.parentNode;
    par.removeChild(del);
}