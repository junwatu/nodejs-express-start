// server.js
var express = require("express");
var engines    = require('consolidate');
var app = express();

app.configure(function(){
	app.use(express.logger());

	app.use(express.static(__dirname + '/app'));

	app.engine('html',engines.underscore);
	/*
	 Set views direcoctory. DO NOT set this with the static directory!. 
	*/
	app.set('views', __dirname+'/app/views');
	app.set('view engine', 'html');

	app.set('PORT',3000);
});

app.get("/",function(req,res){
	res.render('index', {title:'Express with Underscore!'});
});

app.listen(app.get('PORT'));
console.log("Server berjalan pada port "+app.get('PORT')+"...");
