const request = require('request');

let apiKey = '2bd371a75969e21456159bf64eb330e1';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


request(url, function (err, response, body){
    if(err){
        console.log('error:', error);
    } else{
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;
        console.log(message);
        console.log('body:', body);
    }
}
);