var express = require('express')
var exphbs = require('express-handlebars')

var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// app.get('/', function (req, res) {
//   res.send('Welcome to a Handlebars test app')
// })

app.get('/', function (req, res) {
  console.log('GET request received on /')
  var luckyNumber = Math.round(Math.random() * 10)
  res.render('home', {
    luckyNumber: luckyNumber
  })
})

app.listen(3001, function () {
  console.log('Handlebars test running on port 3001')
})
