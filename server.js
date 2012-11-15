// server.js
var express = require("express");
var cons    = require('consolidate');
var app = express();

app.configure(function(){
	app.use(express.logger());
	app.use(express.static(__dirname + '/app'));
	
	app.engine('html',cons.underscore);
	app.set('view engine', 'html');

	app.set('PORT',3000);
});

app.get("/",function(req,res){
	res.render('index');
});

app.listen(app.get('PORT'));
console.log("Server berjalan pada port "+app.get('PORT')+"...");
