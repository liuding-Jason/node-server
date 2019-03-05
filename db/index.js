/*
	intro : mysql db connection use mysql engine
	Author : chenchao
	Date : 2019-03-05
*/

import mysql from "mysql" ;
import chalk
import { dbconfig } from "../config/index" ;

// init test db config
const TEST_DB = 'test' ;
const myDbConfig = dbconfig('test') ;

// create connection
const connection = mysql.createConnection(myDbConfig) ;
// run connection
connection.connect(function(err){
	console.log(
		chalk.red(`mysql connects failed , err is ${err} , please try again...`) 
	) ;
}) ;

module.exports = connection ;

