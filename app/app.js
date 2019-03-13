/*
	intro : entry file 
	Author : chenchao
	Date : 2019-03-04
*/

import express from "express" ;
import chalk from "chalk" ;
import router from "../routers/index" ;
import { SessionRedis , CookieParser } from "../middlewares/index" ;

// import config
import config from "../config/index" ;

// init server
const app = express() ;

app.all("*" , (req , res , next) => {

	const { origin , Origin , referer , Referer } = req.headers ;
	const allowOrigin = origin || Origin || referer || Referer || "*" ;

	// http request setting
	res.header("Access-Control-Allow-Origin", allowOrigin) ;
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With") ;
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS") ;
  res.header("Access-Control-Allow-Credentials", true) ; //可以带cookies
	res.header("X-Powered-By", 'Express') ;
	
	// options retrun
	if (req.method == 'OPTIONS') {
  	res.sendStatus(200);
	} else {
    next();
	}
}) ;

// 解析参数
var bodyParser = require('body-parser') ;
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: true })) ;

// 添加cookie-parse模块，对cookie进行签名验证
app.use(CookieParser) ;
// 添加session保持登陆状态，并将这部分数据持久化到redis中
app.use(SessionRedis) ;

// app.get('/', function(req, res, next) {
//   var sess = req.session ;//用这个属性获取session中保存的数据，而且返回的JSON数据
//   if (sess.views) {
//     sess.views++ ;
//     res.setHeader('Content-Type', 'text/html') ;
//     res.send('<p>welcome ' + sess.views + 'times       ' + 'expires in:' + (sess.cookie.maxAge / 1000) + 's</p>')
//     res.end();
//   } else {
//     sess.views = 1
//     res.end('welcome to the session demo. refresh!')
//   }
// });

app.get("/" , function(req , res , next){
	res.send('hello world!') ;
}) ;

// mount router for your application
router(app) ;

app.listen(config.port , () => {
	console.log(
		chalk.green(`server is running , at port ：${config.port}`)
	)
}) ;

