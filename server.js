
const express = require('express')
const bodyParser = require('body-parser');
const request = require('request');
let celcius = require('fahrenheit-to-celsius');
const roundto = require('round-to');
const app = express()
const apiKey = '2bd371a75969e21456159bf64eb330e1';



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      let username = req.body.username;/*this was supposed to declare the variable username*/
      console.log(username);
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `Hi, ${req.body.username} It's ${roundto.up(celcius(weather.main.temp), 2)} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})