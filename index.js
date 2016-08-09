var express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.send('Welcome to a Handlebars test app')
})

app.use('/public', express.static('public'))

app.listen(3001, function () {
  console.log('Handlebars test running on port 3001')
})
