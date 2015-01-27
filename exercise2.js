var express = require('express')
var app = express()
var path = process.argv[3]

app.set('view engine', 'jade')
app.set('views', path)

app.get('/home', function (req, res) {
	res.render('index', {date: new Date().toDateString()})
})

app.listen(process.argv[2])