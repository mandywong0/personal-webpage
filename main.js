const express = require('express');
const path = require('path');
const port = process.env.PORT ||3000;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/email_form.html', (req, res) => {
    res.sendFile(__dirname + '/email_form.html');
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/script.js');
});

//images

app.get('/email_logo.webp', (req, res) => {
    res.sendFile(__dirname + '/email_logo.webp');
});

app.get('/insta_logo.png', (req, res) => {
    res.sendFile(__dirname + '/insta_logo.png');
});

app.get('/linkedin_logo.webp', (req, res) => {
    res.sendFile(__dirname + '/linkedin_logo.webp');
});

app.get('/logo.jpg', (req, res) => {
    res.sendFile(__dirname + '/logo.jpg');
});

app.get('/real_me.jpeg', (req, res) => {
    res.sendFile(__dirname + '/real_me.jpeg');
});

app.get('/self-portrait.jpg', (req, res) => {
    res.sendFile(__dirname + '/self-portrait.jpg');
});


app.listen(port,

 () => {
  console.log(`Example app listening at <http://localhost>:${port}`);
});