const input = document.querySelector("input");
const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector("ul");

addBtn.addEventListener("click", addToDo);  //클릭하면 함수호출


function addToDo(){
    const todo = input.value;

    if(todo == "") return;

    console.log(todo);
    //엘리먼트 생성
    const li = document.createElement("li");
    li.className="list";
    const span = document.createElement("span");
    const delBtn = document.createElement('button');
    //delBtn문자에 X넣기
    delBtn.innerText = '❌';
    //span태그에 문자 값 넣기
    span.innerText = todo;
    //자식값으로 넣기
    li.appendChild(span);      
    li.appendChild(delBtn);

    ul.appendChild(li);

    input.value = "";

    
    delBtn.addEventListener("click", deleteToDo);   //인자값이 없는데 addEventListner는 인자값을 자동으로 준다(deleteToDo(this)같이 븅신짓 안해도됨)
}

function deleteToDo(event){
    console.log(event);
    const btn = event.target;   //event.target, 버튼을 저장시킴
    const li = btn.parentNode;  //그 버튼의 아빠(li)를 li로 받음
    ul.removeChild(li);         //ul안에 li로 받은걸 삭제함
}


