var express = require('express');
var app = express();

app.get('/', function (req, res) {
        res.send('Hello World!yep');
});

var port = process.env.PORT;
app.listen(port, function () {
        console.log('App listening on port ' + port);
});
