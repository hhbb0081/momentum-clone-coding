const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //기본 동작 막기
    loginForm.classList.add(HIDDEN_CLASSNAME); //classname 에 hidden 추가. 실행되면 다 form 태그 형태 다 숨겨짐

    const username = loginInput.value; // 사용자가 입력한 값
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit); // submit 한다면 함수 실행

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; // Hello 입력값
    greeting.classList.remove(HIDDEN_CLASSNAME); // classname에 hidden을 지워 보이게 함
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //유저 정보가 없을 때
    loginForm.classList.remove(HIDDEN_CLASSNAME); //form 형태를 보이게 함
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}