const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3000, () => { 
    console.log ('HTTP Server UP!!');
});

app.get('/', function (req, res) {
    let htmlPath = path.resolve(__dirname, './views/home.html');
    res.sendFile(htmlPath);
});

app.get('/register', function (req, res) {
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath);
});

app.get('/login', function (req, res) {
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath);
});
