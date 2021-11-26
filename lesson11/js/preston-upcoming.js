const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Preston") {
            let card = document.getElementsByClassName('events');
            let li_one = document.getElementById('preston-event-one');
            li_one.textContent = towns[i].events[0];
            card.appendChild(li_one);
            document.querySelector('div.events').appendChild(card);

            let li_two = document.getElementById('preston-event-two');
            li_two.textContent = towns[i].events[1];
            card.appendChild(li_two);
            document.querySelector('div.events').appendChild(card);
        }
    }
  });