/*
	intro : database config 
	Author : chenchao
	Date : 2019-03-05
*/

import env from "./env" ;

// define max connections for mysql pool
const MAX_CONNECTIONS = 50 ;

// @database - your database setting , 
// 'mysql' is the default option
const msConfig = ( database = 'mysql' ) => {
	return {
		maxConnections : MAX_CONNECTIONS ,
		host : env.host ,
		port : '3340' , // mysql主从模式中，master的端口
		user : 'root' ,
		password : '123456' ,
		database : database
	}
} ;

module.exports = msConfig ;