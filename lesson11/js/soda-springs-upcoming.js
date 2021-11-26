const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Soda Springs") {
            let card = document.createElement('section');
            let p1 = document.createElement('p');
            p1.textContent = towns[i].events[0];
            card.appendChild(p1);
            document.querySelector('div.events').appendChild(card);

            let p2 = document.createElement('p');
            p2.textContent = towns[i].events[1];
            card.appendChild(p2);
            document.querySelector('div.events').appendChild(card);

            let p3 = document.createElement('p3');
            p3.textContent = towns[i].events[2];
            card.appendChild(p3);
            document.querySelector('div.events').appendChild(card);
    
        }
    }
  });