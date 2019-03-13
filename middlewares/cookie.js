/*
	intor : cookie-parse middleware defination
	Author : chenchao
	Date : 2019-03-13
*/
import cookieParser from "cookie-parser" ;

// define cookie sign secert 
// It is very IMPORTANT for your website's cookies , 
// make sure that you have always saved it in your server .  
const COOKIE_SIGN_SECERT = 'cookie-sign' ;


// init cookie-parse
const CookieParser = cookieParser(COOKIE_SIGN_SECERT) ;

module.exports = CookieParser ;



