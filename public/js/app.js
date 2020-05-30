const weatherform = document.querySelector('form')
const searchvalue = document.querySelector('input')
const locationNameMessage = document.querySelector('#location-name-message')
const weatherdescription = document.querySelector('#weather_descriptions')
const temperature = document.getElementById('temperature')
const country = document.querySelector('#country')
const degree = document.getElementById('f')

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/weather?address=' + searchvalue.value)
        .then((res) => res.json())
        .then((data) => {
            if (data.Error) {
                locationNameMessage.textContent = data.Error
                setTimeout(() => {
                    locationNameMessage.innerHTML = ""
                }, 3000)
            } else {
                weatherdescription.textContent = data.description[0]
                country.textContent = data.location
                temperature.innerHTML = `<p class="display-1 degree" > ${data.temperatur}&#8451;</p>`
            }
        })
    setTimeout(() => {
        document.querySelector('form').reset();
    }, 1)

})

var today = new Date();
var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
var todaydate = date + "/" + month + "/" + year;
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log(daylist[day]);
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}
document.getElementById('time').innerHTML = hour + " : " + minute + prepand + daylist[day];
document.getElementById('date').innerHTML = todaydate;