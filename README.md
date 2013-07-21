dysf.utils [![Build Status](https://travis-ci.org/khilnani/dysf.utils.png?branch=master)](https://travis-ci.org/khilnani/dysf.utils)
==========

Custom dysfunctional utilities for node.js !!!

Usage
=========

- utils - <code>utils = require("dysf.utils").utils;</code>
- logger - <code>logger = require("dysf.utils").logger;</code>
- mock - <code>mock = require("dysf.utils").mock;</code>

API
==========

- logger
  - logger.setLogLevel( id ) - 0: system, 1: error, 2: warn, 3: event, 4: info, 5: debug, 6: trace. Default is 4 (info)
  - logger.system ( msg | obj ) - Useful for system level notifications.
  - logger.error ( msg | obj )
  - logger.warn ( msg | obj )
  - logger.event ( msg | obj ) - Recommended for key events like new tranactions / sessions / requests etc.
  - logger.info ( msg | obj ) - Recommended for notable phases within a transaction like handlers, methods etc.
  - logger.debug ( msg | obj ) - Recommended for useful property values or callback tracking.
  - logger.trace ( msg | obj ) - Recommended for detailed debugging like printing object contents.

- utils
  - utils.renderFile ( response, path, replaceParams, callback )

- mock
  - mock.response ( text )
   


Installation
=======

Global
--------- 
- Run: <code>sudo npm install dysf.utils -g</code>
- Usually installed at - /usr/local/lib/node_modules/dysf.utils

Project
---------
- Add <code>"dysf.utils": "x.x.x"</code> to the dependencies section of your project's package.json 
  - Example <code>"dependencies": { "dysf.utils": "x.x.x" }</code>
- Run <code>npm install</code> in the director with your package.json
- Usually installed at - PROJECT_DIR/node_modules/dysf.utils

