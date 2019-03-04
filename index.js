// load entry file 


// polyfill ES6 grammer
require("babel-register")({
	'presets': ["es2015", 'stage-3'],
}) ;
require('babel-polyfill') ;

require("./app/app.js") ;