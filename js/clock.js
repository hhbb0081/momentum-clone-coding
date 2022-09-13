const clock = document.querySelector("#clock");

function getClock() {
    const data = new Date();
    
    const hours = String(data.getHours()).padStart(2, "0");
    const minutes = String(data.getMinutes()).padStart(2, "0");
    const seconds = String(data.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //1초 기다렸다가 함수가 실행되기 때문에 먼저 한 번 실행
setInterval(getClock, 1000);