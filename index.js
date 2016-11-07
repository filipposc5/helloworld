var express = require('express');
var app = express();

app.get('/', function (req, res) {
	var message = process.env.MESSAGE;
	if (message) {
		res.send('<p>Hello World!</p><p>'+ message + '</p>');
	}
	else {
		res.send('Hello World!');
	}
});

var port = process.env.PORT;
app.listen(port, function () {
        console.log('App listening on port ' + port);
});
