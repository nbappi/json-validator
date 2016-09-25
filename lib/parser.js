var validator = require("./validator");

module.exports = {
   parse : function(data, callBack){
   	  var msg, status;
   	  validator.validText(data, function(status){
   	  	if(status == false){
           msg = "Please, provide text.";
           status = false;
   	  	} else {
           status = true;
           data.split(' ').forEach(function (line) {
              msg = "This is valid text"
           });
   	  	}
   	  });

   	  callBack({ status : status, msg : msg })
   }
};