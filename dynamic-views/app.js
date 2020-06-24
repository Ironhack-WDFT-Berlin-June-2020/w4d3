const express = require('express');
const app = express();

const movies = require('./movies.json');



// console.log(movies);

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index',
        {
            name: 'John Doe',
            todos: ['learn node', 'learn react', 'play nintendo', 'watch dark season 3'],
            address: {
                street: 'Sesame',
                number: 87
            }
        })
});

app.get('/movies', (req, res) => {
    // const movies = <our database access>
    res.render('moviesView', { movies: movies });
})

app.listen(3000);