// server.js
var express=require("express");
var app=express();

app.configure(function(){
	app.use(express.logger());
	app.set('PORT',3000);
});

app.get("/",function(req,res){
	res.send("<h3>Welcome, This Is Express Delivery! :)</h3>");
});

app.listen(app.get('PORT'));
console.log("Server berjalan pada port "+app.get('PORT')+"...");
