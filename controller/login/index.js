/*
	intro : login controller
	Author : chenchao
	Date : 2019-03-12
*/

import BaseController from "../base/index" ;

class Login extends BaseController {

	constructor(){
		super() ;
	}

	// sign up TODO
	// check to sign up of users
	signUp(req , res , next){
		res.send('Please Sing Up!') ;
	}

	// login in 
	// check user info and set session who's name is session_id
	async loginIn(req , res , next){
		// 
		let { username , password } = req.query ;

		// TODO 密码需要进行加密操作
		const sql = `select * from user where username='${username}' and password='${password}'` ;

		this.runDBQuery(sql)
		.then((result) => {
			res.send( this.returnSuccessStatus() );
		})
		.catch((err) => {
			res.send( this.returnFailedStatus('username or password error...') ) ;
		})
	}

	// login out
	// unset session who's name is session_id
	async loginOut(req , res , next){
		let { session_id = '' } = req.session ;

		// 判断session_id是否存在
		if(true){
			req.session.session_id = '' ;
			res.send( this.returnSuccessStatus() ) ;
		}
	}

} ;

module.exports = new Login() ;