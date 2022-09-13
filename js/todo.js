const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = []; //이전 값을 초기화하지 않기 위함
const TODOS_KEY = "toDos";

function saveTodos() { // localstorage에 toDos 배열 저장
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}

function deleteTodo(event) { // 지우기
    const li = event.target.parentElement;
    li.remove(); // 태그 지우기
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) { // 태그 만들어서 html에 복사
    const li = document.createElement("li"); // li 태그 생성
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button"); // button 태그 생성
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span); // li 태그 안에 span 태그 넣기
    li.appendChild(button); // li 태그 안에 button 태그 넣기

    toDoList.appendChild(li); // 태그 덩어리 todolist 태그에 넣기
}

function handleToDoSubmit(event) {
    event.preventDefault(); // 새로고침 방지
    const newTodo = toDoInput.value; // 입력 값 저장
    toDoInput.value = ""; //입력칸 빈칸으로 만들기

    const newTodoObj = { //어떤 것을 삭제해야 하는지 구분하기 위해 랜덤 값으로 id 값 생성
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //object로 변환
    toDos = parsedToDos; //이전 배열 복원
    //paintTodo 호출, forEach로 부른 문자열 하나하나를 paintTodo의 인자로 보냄
    parsedToDos.forEach(paintTodo) //array의 각 item에 대해 하나의 function 실행 가능
}