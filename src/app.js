var express = require('express');
var app = express()
var path = require('path')

app.get('/css', function(req, res) {
    res.sendFile(path.join(__dirname, 'css', 'index.css'))
})
app.get('/swiper', function(req, res) {
    res.sendFile(path.join(__dirname, 'css', 'swiper.min.css'))
})
app.get('/JSswiper', function(req, res) {
    res.sendFile(path.join(__dirname, 'js', 'swiper.min.js'))
})
app.get('/flexible', function(req, res) {
    res.sendFile(path.join(__dirname, 'js', 'flexible.js'))
})
app.get('/jquery', function(req, res) {
    res.sendFile(path.join(__dirname, 'js', 'jquery-3.3.1.min.js'))
})
app.get('/img', function(req, res) {
    res.sendFile(path.join(__dirname, 'img', '1.jpg'))
})
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/json', function(req, res) {
    res.sendFile(path.join(__dirname, 'json', 'data.json'))
})
app.listen(8080)