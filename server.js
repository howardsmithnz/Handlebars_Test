var express = require('express')
var hbs = require('express-hbs')

var app = express()

app.use('/public', express.static('public'))

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
  defaultLayout: __dirname + '/views/layouts/default.hbs',
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts'
}))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

// app.get('/', function (req, res) {
//   res.send('Welcome to a Handlebars test app')
// })

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3001, function () {
  console.log('Handlebars test running on port 3001')
})
