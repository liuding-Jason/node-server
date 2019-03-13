/*
	intro : node connect redis module controller
	Author : chenchao
	Date : 2019-03-12
*/

import redis from "redis" ;
import Redis from "ioredis" ;
import chalk from "chalk" ;

// redis config
import { rdconfig } from "../config/index" ;

// get redis setting
const { port , host , password } = rdconfig ;

/*
	一、创建session 存储的redis
*/
let redisClient = {} ;

try {
	redisClient = redis.createClient(port[0] , host , { password }) ;
	console.log(
		chalk.green(`redis client create success .`)
	) ;
}catch(err){
	console.log(
		chalk.red(`redis client create failed , please try again...`)
	) ;
}

/*
	二、创建redis集群连接，并对外暴露redis的操作
*/
let redisNumbers = port.map((p , i) => { return { host , port : p } }) ;
const redisCluster = new Redis.Cluster(redisNumbers);

// export
module.exports = {redisClient , redisCluster} ;

