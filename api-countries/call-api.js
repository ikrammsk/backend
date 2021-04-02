




var request = require('request');



request.get("http://localhost:8000/countries/", function (err, res, body) {

    var result = JSON.parse(body);
    result.reverse();
    console.log(result);
});




