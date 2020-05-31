const weatherform = document.querySelector('form')
const searchvalue = document.querySelector('input')


const locationNameMessage = document.querySelector('#location-name-message')
const weatherdescription = document.querySelector('#weatherdescription')
const temperature = document.querySelector('#temperature')
const locationName = document.querySelector('#locationName')
const feelslike = document.querySelector('#feelslike')
const windspeed = document.querySelector('#windspeed')
const humidity = document.querySelector('#humidity')
const timezone = document.querySelector('#timezone')
const locationtime = document.querySelector('#locationtime')


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
                locationNameMessage.textContent = data.location
                weatherdescription.textContent = data.description[0]
                temperature.innerHTML = `<h1 class="large-font mr-3" > ${data.temperatur}&#176;F</h1>`
                locationName.textContent = data.locationName
                feelslike.textContent = data.feelslike
                windspeed.textContent = data.windspeed
                humidity.textContent = data.humidity
                timezone.textContent = data.timezone
                var temp = data.locationtime.split(' ')
                temp_time = temp[1]
                temp_date = temp[0].split('-').reverse().join('/')
                locationtime.innerHTML = `<h5> <img src="img/icon/time.png" alt="time"> ${temp_time} &nbsp&nbsp&nbsp  <img src="img/icon/date.png" alt=""> ${temp_date} </h5>`
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