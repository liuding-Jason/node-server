/*
	intro : controller base class
	Author : chenchao
	Date : 2019-03-06
*/
// import db
import db from "../../db/pool" ;
import chalk from "chalk" ;
import { redisClient , redisCluster } from "../../db/redis" ;


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
	returnFailedStatus(message = 'request failed' , type = 'DEFAULT_ERROR' , data = {} ){
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
	/*
		intro : redis single server get 
	*/
	getRedisKey(key){
		if(!key) return ;
		return new Promise((resolve , reject) => {
			redisClient.get(key , (err , result) => {
				if(err){
					reject(err) ;
				}
				resolve(result) ;
			}) ;
		})
	}

	/*
		intro : redis single server set
	*/
	setRedisKey(key , value){
		if(key && value){
			try {
				redisClient.set(key , value) ;
				console.log(
					chalk.green(`redis server set key=${key} success , value is ${value} !`)
				);
			}catch(err){
				console.log(
					chalk.red(`redis server set key=${key} failed !`)
				) ;
				throw new Error(err) ;
			}
		}
	}
	
	/*
		intro : redis cluster get
	*/
	getRedisClusterKey(key){
		if(!key) return ;
		return new Promise((resolve , reject) => {
			redisCluster.get(key , (err , result) => {
				if(err){
					reject(err);
				}
				resolve(result) ;
			})
		});
	}
	/*
		intro : set key and value in redis cluster
	*/
	setRedisClusterKey(key , value){
		if(key && value){
			try {
				redisCluster.set(key , value) ;
				console.log(
					chalk.green(`redis cluster set success , key is ${key} !`)
				);
			}catch(err){
				console.log(
					chalk.red(`redis cluster set failed , key is ${key} !`)
				) ;
				throw new Error(err) ;
			}
		}
	}

} ;

module.exports = BaseController ;