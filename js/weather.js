const API_KEY = "0ed2a6b7376bf910fa3a3195b290397a";

function getWeatherEmoji(weather) {
  switch (weather.toLowerCase()) {
    case "clear":
      return "☀️";
    case "clouds":
      return "☁️";
    case "rain":
      return "🌧️";
    case "snow":
      return "❄️";
    case "thunderstorm":
      return "⛈️";
    case "drizzle":
      return "🌦️";
    case "mist":
    case "fog":
      return "🌫️";
    default:
      return "🌈";
  }
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      const weatherMain = data.weather[0].main;
      const temp = data.main.temp;
      const cityName = data.name;
      const emoji = getWeatherEmoji(weatherMain);

      weather.innerText = `${emoji} ${weatherMain} / ${temp}°C`;
      city.innerText = `📍 ${cityName}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
