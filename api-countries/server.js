const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
const port = 8000;

app.get('/', (req, res) => {
    res.send('Countries API');
});


app.get('/countries/', (req, res) => {

    var list = ['Tunisie', 'Maroc', 'Algerie', 'Senegal']




    res.send(list);

});




app.listen(port, () => {
    console.log('Server started on port: ' + port);
});