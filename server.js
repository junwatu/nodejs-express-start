// server.js
var http=require("http");
http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Tidak Menyesal Belajar JavaScript! :)");
	response.end();
}).listen(3000);
console.log("Server listening on port 3000...");
