/*
	intro : controller base class
	Author : chenchao
	Date : 2019-03-06
*/
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
	*/

} ;

module.exports = BaseController ;