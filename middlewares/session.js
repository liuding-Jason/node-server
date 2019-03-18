/*
	intro : session in redis middleware defination
	Author : chenchao
	Date : 2019-03-12 
*/
import session from "express-session" ;
import connectRedis from "connect-redis" ;
import { redisClient , redisCluster } from "../db/redis" ;

// session 加密key
const SESSION_SECRET_KEY = 'test-secert-key' ;
// init Redis
const RedisStore = connectRedis(session) ;
// init cookie expire time - 1 hour
const ExpireTime = 90000 ;

// init middleware
const SessionRedis = session({
	// 设置通过cookie携带session
	'cookie': {
		// 'secure' : true ,		// 设置是否只有https的协议才可以访问
		'httpOnly': true , 	// http协议中的cookie，浏览器不可以通过js脚本修改或者获取
		'maxAge': ExpireTime ,  	// 设置cookie的过期时间
	} ,
	// define session 存储的介质为 redis 而不是服务器内存
	'store' : new RedisStore({ client : redisClient }) ,
	'secret' : SESSION_SECRET_KEY ,
 	// 是否每次都重新保存会话，建议false
 	'resave' : false ,
 	// 设置session自动延长过期时间
 	'rolling' : true ,
 	// 是否自动保存未初始化的会话，建议false
  'saveUninitialized' : false ,
  'name' : 'session_id' ,
  
}) ;

module.exports = SessionRedis ;



