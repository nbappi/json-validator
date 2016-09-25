module.exports = {
   validText : function(data, cb){
   	    var slag = true ;
	   	if( data == ''){
	      slag = false;
	   	}
	   	cb(slag);
   }
};