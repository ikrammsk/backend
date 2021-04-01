const express = require('express');
const app = express();
const port = 8000;

// app.get('/', (req, res) => {
// res.send('Authors API');
// });


app.get('/authors/:id', (req, res) => {
    
    var list = ['Lawrence Nowell, UK', 'William Shakespeare, UK', 'Charles Dickens, US', 'Oscar Wilde, UK']
    var authors = req.params.id - 1
   
    res.send(list[authors]);

});



app.get('/authors/:id/books', (req, res) => {
    
    var books = ['Beowulf', 'Hamlet, Othello, Romeo and Juliet, MacBeth', 'Oliver Twist, A Christmas Carol', 'The Picture of Dorian Gray, The Importance of Being Earnest']
    var authorsBooks = req.params.id

    res.send(books[authorsBooks]);
});

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
