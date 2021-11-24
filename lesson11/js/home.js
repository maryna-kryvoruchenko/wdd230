const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = towns[i].name;
            card.appendChild(h2);
            document.querySelector('div.containers').appendChild(card);

            let h3 = document.createElement('h3');
            h3.textContent = towns[i].motto;
            card.appendChild(h3);
            document.querySelector('div.containers').appendChild(card);

            let p = document.createElement('p');
            p.textContent = 'Year Founded: ' + towns[i].yearFounded;
            card.appendChild(p);
            document.querySelector('div.containers').appendChild(card);

            let par = document.createElement('p');
            par.textContent = 'Average Rain Fall: ' + towns[i].averageRainfall;
            card.appendChild(par);
            document.querySelector('div.containers').appendChild(card);

            let image = document.createElement('img');
            image.setAttribute('src', "images2/" + towns[i].photo);
            card.appendChild(image);
            document.querySelector('div.containers').appendChild(card);
    
        }
    }
  });