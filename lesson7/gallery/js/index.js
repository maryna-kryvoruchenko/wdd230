const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
}); 

d = new Date()

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

if (d.getDay() == 5) {
  var newDiv = document.createElement("div"); 
  newDiv.classList.add("alert");   
  var newItem = document.createElement("p"); 
  newDiv.appendChild(newItem);  
  var textnode = document.createTextNode("Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.");  
  newItem.appendChild(textnode);

  var list = document.getElementById("body");
  list.insertBefore(newDiv, list.childNodes[0]);
}

WebFont.load({
  google: {
    families: [
       'Open Sans Condensed'
    ]
  }
});

