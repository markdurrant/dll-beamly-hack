

var express = require('express');
var app = express();
var zlib = require('zlib');

app.get('/hello.txt', function (req, res) {
	res.send('Hello World');
});


app.get('/channels', function (req, res) {
	/* --------------------   */
	/* Calling the Beamly API */
	var request2 = require("request");

	request2({
		uri: "https://api-uk.zeebox.com/epg/1/epg/p1:r1",
		method: "GET",

		headers: {
			"zeebox-app-id": "1702e65d",
			"zeebox-app-key": "539e2e8ff30a9c3050bc59aac782b0c2",
			"accept": '*/*'
		},
		timeout: 10000,
		followRedirect: true,
		maxRedirects: 10
	}, function (error, response, body) {
		res.send(body);
	});
});


app.get('/program', function (req, res) {

	/* --------------------   */
	/* Calling the Beamly API */
	var request2 = require("request");
	var buffer = [];

	request2({
		uri: "https://api-uk.zeebox.com/epg/1/broadcastevent/4353116",
		method: "GET",

		headers: {
			"zeebox-app-id": "1702e65d",
			"zeebox-app-key": "539e2e8ff30a9c3050bc59aac782b0c2",
			'Accept-Encoding': 'gzip'
		},
		timeout: 10000,
		followRedirect: true,
		maxRedirects: 10
	}, function (error, response, body) {
		console.log(error);
		console.log(response);
		console.log(body);
		gunzipJSON(body);

	});
});


function gunzipJSON(response) {

	var gunzip = zlib.createGunzip();
	var json = "";

	gunzip.on('data', function (data) {
		json += data.toString();
	});

	gunzip.on('end', function () {
		parseJSON(json);
	});

	response.pipe(gunzip);
	res.send("Done");
}

function parseJSON(json) {

	var json = JSON.parse(json);

	if (json.items.length) {

		for (var i in json.items) {

			console.log(json.items[i].title + '\n' + json.items[i].link);

		}

	}
}


var server = app.listen(3000, function () {
	console.log('Listening on port %d', server.address().port);
});




