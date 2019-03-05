/*
	intro : config defination file
	Author : chenchao
	Date : 2019-03-04
*/

import dbconfig from "./db" ;
const config = {
	// databse
	dbconfig ,

	// server port
	port : '3008' ,

	// server controller version
	controllerVersion : 'v1' ,

} ;

module.exports = config ;