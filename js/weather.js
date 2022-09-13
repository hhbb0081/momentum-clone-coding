const API_KEY = "0687fa8be60c01cb81380d1e50e37727";

function onGeoOk(position) {
  //position으로 user의 위치를 알려줌
  const lat = position.coords.latitude; //위도
  const lng = position.coords.longitude; //경도
  console.log("You live it", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  }); // 실제로 url에 직접 갈 필요 없이 javascript가 url을 불러옴
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);