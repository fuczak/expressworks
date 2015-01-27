var express = require('express')
var stylus = require('stylus')
var app = express()
var path = process.argv[3]

app.use(express.static(path))
app.use(stylus.middleware(path))

app.listen(process.argv[2])