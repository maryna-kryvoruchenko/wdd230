let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
let thename = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let key = '6801c679faa89deb6356eb9331222fb8';

button.addEventListener('click', function(){
    fetch(`api.openweathermap.org/data/2.5/weather?id=` + inputValue + `&appid=${key}`)
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];

        thename.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })


.catch(err => alert("Wrong city name!"))
})



// const apiURL = `api.openweathermap.org/data/2.5/weather?id=5604473&appid=${key}`;
// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);
//     document.getElementById('current-temp').textContent = jsObject.main.temp;

//     const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
//     const desc = jsObject.weather[0].description;  // note how we reference the weather array
//     document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
//     document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
//     document.getElementById('icon').setAttribute('alt', desc);
//   });