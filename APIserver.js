var express = require('express'),
	querystring = require('querystring'),
	app = express(),
	bodyParser = require('body-parser'),
	path = require('path'),
  Clarifai = require('./clarifai-nodejs-master/clarifai_node.js');
	fetch = require('isomorphic-fetch');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

Clarifai.initAPI('FyuhZNySPLRFdNbCPChJ1oloBkWUldzRXubbaHRw', 'XqlAjrN0Urkp4DdWGIDScQbIsOb-zrN25jnhb6l_');

var stdio = require('stdio');

function getCredentials(imgUrl) {
	return fetch('https://api.clarifai.com/v1/token/', {
	  method: 'POST',
	  headers: {
	    'content-type': 'application/x-www-form-urlencoded'
	  },
	  body: 'grant_type=client_credentials&' +
			'client_id=FyuhZNySPLRFdNbCPChJ1oloBkWUldzRXubbaHRw&' +
			'client_secret=XqlAjrN0Urkp4DdWGIDScQbIsOb-zrN25jnhb6l_'
	})
	.then(function (res) {
		return res.json();
	})
	.then(function (responseBody) {
		var aToken = responseBody.access_token;
		return fetch('https://api.clarifai.com/v1/tag/?url=' + imgUrl, {
		  method: 'GET',
		  headers: {
		    'Authorization': `Bearer ${aToken}`,
		  }
		})
		.then(function (res) {
			return res.json();
		})
		.then(function (responseBody) {
			console.log(JSON.stringify(responseBody.results[0].result.tag.classes));
	    return responseBody.results[0].result.tag.classes;
		})
	})
}

app.use(express.static(__dirname + '/public'));

app.get('/imgs/:tag', function(req, res){
	var ig = require('instagram-node').instagram();

	ig.use({
		client_id: '0a5111d4f38d4ebaa9abf16e080d6593',
		client_secret: '985ef868b40446d5a6669322aabcdfee'
	});

	ig.tag_media_recent('stela',function(err, result, remaining, limit) {
		var tags = result.map(function (item) {
			return getCredentials(item.images.standard_resolution.url);
		});
		Promise.all(tags).then(function (tags) {
			var result = tags.reduce(function (acc, curr) {
			  return acc.concat(curr);
			}, []).reduce(function(tag, curr) {
			  if(!tag[curr]){
			    tag[curr] = 1;
			  }else{
			    tag[curr] = tag[curr] + 1;
			  }
			  return tag;
			}, {});
			res.json({
				err: err,
				result: result
			});
		});
	});

});

app.listen(3000);

console.log('Magic happens on port: ' + 3000);
