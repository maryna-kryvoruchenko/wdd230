const url =
   "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=744fe90a723fbf1d7ad8053159c6a1d5";

const dofW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var today = new Date();
var time = today.getHours();
console.log(time);
if(time <= 6 && time >= 18){document.body.style.backgroundImage = "url('images/3.png')"}
else {
   document.body.style.backgroundImage = "url('images/4.png')"
}

fetch(url)

   .then((response) => {
      return response.json();
   })
   .then((weatherObjct) => {
      cDay(weatherObjct);
      fiveDay(weatherObjct);

   });

function cDay(weatherObjct) {
   let weatherData = weatherObjct.list[0];
   document.getElementById("currently").textContent = `Currently: ${weatherData.weather[0].main}`;
   document.getElementById("temp").textContent = `${weatherData.main.temp_max} \u00B0F`;
   document.getElementById("humidity").textContent = `Humidity: ${weatherData.main.humidity}%`;
   document.getElementById("wind").textContent = `Wind Speed: ${weatherData.wind.speed} mph`;
   document.getElementById("windchill").textContent = computeWindChill(
    weatherData.main.temp,
    weatherData.wind.speed);

}

function computeWindChill(cTemp, wSpeed) {
    if (cTemp <= 50 && wSpeed >= 3) {
      const wTemp =
        35.74 +
        0.6215 * cTemp -
        35.75 * Math.pow(wSpeed, 0.16) +
        0.4275 * cTemp * Math.pow(wSpeed, 0.16);
      return wTemp.toFixed(1);
    } else {
      return 'NaN';
    }
  }

function fiveDay(weatherObjct) {
    const forecast = weatherObjct.list;
    const size = forecast.length;
    const fiveDayElem = document.querySelector('#fiveDay');
    let fiveDayList = [...fiveDayElem.children];

    let i2 = 0;
    for (let i = 0; i < size; i++) {
        if (forecast[i].dt_txt.includes('18:00:00')) {
            let highTempElem = document.createElement('p');
            highTempElem.textContent = `${forecast[i].main.temp_max} \u00B0F`;

            let fiveWeather = document.createElement('img');
            let imagesrc = "https://openweathermap.org/img/w/" + forecast[i].weather[0].icon + ".png";
            fiveWeather.setAttribute("src", imagesrc)
            fiveWeather.setAttribute("alt", forecast[i].weather[0].description)
            
            let dt = new Date(forecast[i].dt_txt);
            let dayElem = document.createElement('h3');
            dayElem.textContent = dofW[dt.getDay()];
            
            
            fiveDayList[i2].appendChild(dayElem);
            fiveDayList[i2].appendChild(highTempElem);
            fiveDayList[i2].appendChild(fiveWeather);

            i2++;
        }
    }
}

