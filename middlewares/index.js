/*
	intro : node middleware collection
	Author : chenchao
	Date : 2019-03-12
*/

// session setting
import SessionRedis from "./session" ;
import CookieParser from "./cookie" ;

import Authentication from "./authentication" ;

export {
	SessionRedis ,
	CookieParser ,
	Authentication
}