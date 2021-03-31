const express = require('express');
const app = express();
const port = 8000;

// app.get('/', (req, res) => {
// res.send('Authors API');
// });

var authors = ['Lawrence Nowell, UK', 'William Shakespeare, UK', 'Charles Dickens, US', 'Oscar Wilde, UK']

app.get('/authors/:id/', (req, res) => {

    res.send(`Authors ${req.params.id - 1}`);

});




app.listen(port, () => {
    console.log('Server started on port: ' + port);
});