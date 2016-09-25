var validator = require("./validator");

module.exports = {
   parse : function(data, callBack){
   	  validator.validText(data, function(status){

        console.log("parse ", data, status);
   	  });

   	  callBack({ status : true, msg : "Message content"})
   }
};