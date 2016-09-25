var express = require('express');
var parser = require("./lib/parser");
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

http.listen(port, function(){
	console.log("server connect.");
});

app.use(express.static(__dirname));

io.on("connection", function(socket){
	socket.on('json data', function(data){
	   parser.parse(data, function(content){
          socket.emit("sendText", content.msg);
	   });
	});
}); 