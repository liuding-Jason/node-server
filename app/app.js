/*
	intro : entry file 
	Author : chenchao
	Date : 2019-03-04
*/

import express from "express" ;

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

app.listen(config.port , () => {
	console.log(
		chalk.green(`成功监听端口：${config.port}`)
	)
});