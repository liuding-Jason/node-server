/*
	intro : login controller
	Author : chenchao
	Date : 2019-03-12
*/

import BaseController from "../base/index" ;

const USERINFO_ERROR_NOTE = 'username or password error ...' ;

class Login extends BaseController {

	constructor(){
		super() ;
	}

	// sign up TODO
	// check to sign up of users
	signUp(req , res , next){
		// test cluster connection
		this.setRedisKey('c' , 'cat') ;
		res.send('Please Sing Up!') ;
	}

	loginFaild(){
		return this.returnFailedStatus(USERINFO_ERROR_NOTE , 'LOGIN_FAILED') ;
	}

	// login in 
	// check user info and set session who's name is session_id
	async loginIn(req , res , next){
		let { username , password } = req.query ;
		// 校验字段 优化sql查询
		if(!username || !password) {
			res.send( this.loginFaild() ) ;
			return ;
		}
		// TODO 密码需要进行加密操作
		const sql = `select * from user where username='${username}' and password='${password}'` ;

		this.runDBQuery(sql)
		.then((result) => {
			if(result.length === 0){
				res.send( this.loginFaild() ) ;
				return ;
			}
			// create session
			req.session.isLogin = 1 ;
			console.log(req.session) ;
			res.send( this.returnSuccessStatus() ) ;
		})
		.catch((err) => {
			res.send( this.loginFaild() ) ;
		})
	}

	// login out
	// unset session who's name is session_id
	async loginOut(req , res , next){
		let { session_id = '' } = req.session ;
		req.session.isLogin = 0 ;
		res.send( this.returnSuccessStatus() ) ;
	}
} ;

module.exports = new Login() ;