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
		res.send('Please Sing Up!') ;
	}

	// login in 
	// check user info and set session who's name is session_id
	async loginIn(req , res , next){
		let { username , password } = req.query ;
		// 优化sql查询
		if(!username || !password) {
			res.send( this.returnFailedStatus(USERINFO_ERROR_NOTE) ) ;
			return ;
		}

		// TODO 密码需要进行加密操作
		const sql = `select * from user where username='${username}' and password='${password}'` ;

		this.runDBQuery(sql)
		.then((result) => {
			if(result.length === 0){
				res.send( this.returnFailedStatus(USERINFO_ERROR_NOTE) ) ;
				return ;
			}
			// create session
			// sess.views = `program_user_id_${user_id}` ;
			res.send( this.returnSuccessStatus() ) ;
		})
		.catch((err) => {
			res.send( this.returnFailedStatus(USERINFO_ERROR_NOTE) ) ;
		})
	}

	// login out
	// unset session who's name is session_id
	async loginOut(req , res , next){
		let { session_id = '' } = req.session ;

		// 判断session_id是否存在
		if(true){
			// req.session.views = '' ;
			res.send( this.returnSuccessStatus() ) ;
		}
	}

} ;

module.exports = new Login() ;