var socket = io('http://localhost:3000');
var submit = document.getElementById("submitButton");
var textArea = document.getElementById("textarea");
var messages = document.getElementById("messages");

submit.onclick = function(){
	socket.emit("json data", textArea.value);
};

socket.on("sendText", function(msg){
   messages.innerHTML = msg;
});