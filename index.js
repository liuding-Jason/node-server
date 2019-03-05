/*
	intro : load entry file
	Author : chenchao
	Date : 2019-03-05
*/

// polyfill ES6 grammer
require("babel-register")({
	'presets': ["es2015", 'stage-3'] ,
}) ;
require('babel-polyfill') ;

require("./app/app.js") ;