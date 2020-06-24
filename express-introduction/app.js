const express = require('express');
const app = express();

// this is needed to make the public folder available in the html files
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send('<h1>Hello Ironhackers!!!</h1>');
// });

// this logs the absolute path to the current directory
// console.log(__dirname);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home-page.html');
});

app.get('/cat', (req, res) => {
    res.sendFile(__dirname + '/views/cat-page.html');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

