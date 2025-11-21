const temp = document.querySelector("#temp")
const apparent = document.querySelector("#apparent-temp")
const wind = document.querySelector("#wind")

fetch("https://api.open-meteo.com/v1/forecast?latitude=56.13932&longitude=8.97378&current=temperature_2m,precipitation,rain,snowfall,apparent_temperature,wind_speed_10m")
 .then(response => response.json())
 .then(weather => {
    temp.textContent = weather.current.temperature_2m
    apparent.textContent = weather.current.apparent_temperature
    wind.textContent = weather.current.wind_speed_10m
 })