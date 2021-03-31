const express = require('express');
const app = express();
const port = 8000;


app.get('/authors/1/books/', (req, res) => {

    res.send(`Beowulf ${req.params.books} !`);
});

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
