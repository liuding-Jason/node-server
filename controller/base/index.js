/*
	intro : controller base class
	Author : chenchao
	Date : 2019-03-06
*/
// import db
import db from "../../db/pool" ;
import chalk from "chalk" ;

import errorCode from "./errorCode" ;

// static verb
const SUCCESS_CODE = 200 ;

class BaseController {

	constructor(){

	}
	/*
		intro : return success status for ajax
		format : { code : 200 , message : 'ok' , data : {}}
	*/
	returnSuccessStatus(data = {} , message = 'ok'){
		return {
			code : SUCCESS_CODE ,
			message ,
			data
		}
	}
	/*
		intro : return failed status for ajax
	*/
	returnFailedStatus(message = 'request failed' , data = {} , type = 'DEFAULT_ERROR'){
		if(!errorCode.hasOwnProperty(type)) type = 'DEFAULT_ERROR' ;
		return {
			code : errorCode[type] ,
			message ,
			data
		}
	}
	/*
		intro : mysql connection 
		note : mysql query is a async process , so you SHOULD use Promise 
	*/
	async runDBQuery(sql){
		if(!sql) return ;
		return new Promise(( resolve , reject ) => {
			db.query(sql , (err , result) => {
				if(err){
					console.log(
						chalk.red(`mysql query error , errorInfo is ${err}` )
					) ;
					reject( err ) ;
				}
				resolve(result) ;
			}) ;
		}) ;
	}
} ;

module.exports = BaseController ;