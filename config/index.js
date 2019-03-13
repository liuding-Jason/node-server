/*
	intro : config defination file
	Author : chenchao
	Date : 2019-03-04
*/

import dbconfig from "./db" ;
import rdconfig from "./rd" ;

const config = {
	// mysql config
	dbconfig ,

	// redis config
	rdconfig ,

	// server port
	port : '3008' ,

	// server controller version
	controllerVersion : 'v1' ,

} ;

module.exports = config ;