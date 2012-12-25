//-------------------------------------------------

var log = require("../lib/dysf.utils").logger;

log.setLogLevel(5);

log.system("system");
log.error("error");
log.warn("warn");
log.event("event");
log.info("info");
log.debug("debug");
log.trace("trace");
log.trace( { obj: "data"} );


//-------------------------------------------------

var utils = require("../lib/dysf.utils").utils;
var mock = require("../lib/dysf.utils").mock;

// Replace this >> %replace%

var replaceParams = {'%replace%': "REPLACED!!" };

utils.renderFile(mock.response, __filename, replaceParams, function (err) {
	if(err) 
  	{
  		log.error("utils.renderFile");
  		log.error(err);
	} else {
		log.event("utils.renderFile completed.");  	
	}
  });
  		
  		