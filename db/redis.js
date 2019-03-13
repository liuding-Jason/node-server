/*
	intro : node connect redis module controller
	Author : chenchao
	Date : 2019-03-12
*/

import redis from "redis" ;
import chalk from "chalk" ;

// redis config
import { rdconfig } from "../config/index" ;

// get redis setting
const { port , host , password } = rdconfig ;

let redisClient = {} ;

try {
	redisClient = redis.createClient(port , host , { password }) ;
	console.log(
		chalk.green(`redis client create success .`)
	) ;
}catch(err){
	console.log(
		chalk.red(`redis client create failed , please try again...`)
	) ;
}

module.exports = redisClient ;

