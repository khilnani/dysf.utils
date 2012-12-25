
var log = require("../lib/dysf.utils").logger;

log.setLogLevel(5);

log.system("system");
log.error("error");
log.warn("warn");
log.event("event");
log.info("info");
log.debug("debug");
log.trace("trace");

