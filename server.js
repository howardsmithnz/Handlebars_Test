var express = require('express')
var exphbs = require('express-handlebars')

var app = express()

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.get('/', function (req, res) {
  console.log('GET request received on /')
  var luckyNumber = Math.round(Math.random() * 10)
  var trees = ['Rimu', 'Miro', 'Kahikatea']

  res.render('home', {
    luckyNumber: luckyNumber,
    trees: trees
  })
})

app.get('/about', function (req, res) {
  res.render('about')
})

app.listen(3001, function () {
  console.log('Handlebars test running on port 3001')
})
