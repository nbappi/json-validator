var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

http.listen(port, function(){
	console.log("server connect.");
});

app.use(express.static(__dirname));

io.on("connection", function(socket){
	console.log("socket connect");
	socket.emit('news', { hello: 'world' });
}); 