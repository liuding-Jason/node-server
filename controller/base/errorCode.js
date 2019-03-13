/*
	intro : base error code defination
	Author : chenchao
	Date : 2019-03-06
*/

const errorCode = {
	// database connect failed 
	DATABASE_CONNECT_FAILED : 2000001 ,
	// session does not expired
	SESSION_DOES_NOT_EXPIRED : 1000001 ,
	// login failed that means your username or password is not right 
	LOGIN_FAILED : 1000002 ,
	// not login
	NOT_LOGIN : 1000003 ,
	// default error 
	DEFAULT_ERROR : 1000000 ,
	// server internel error
	SERVER_INTERNEL_ERROR : 5000000 ,
} ;

module.exports = errorCode ;