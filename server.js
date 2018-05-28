
const bodyParser = require('body-parser');
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', function (req, res) {
  res.render('index')
  console.log(req.body.city);
})

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})