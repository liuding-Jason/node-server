/*
	intro : authentication middleware defination
	Author : chenchao
	Date : 2019-03-12
*/

import BaseController from "../controller/base/index" ;

const bs = new BaseController() ;

const Authentication = (req , res , next) => {

	// 1、客户端请求头cookie中包含session_id的字段，并且这个session在server的redis中，则验证通过
	// isLogin 是登陆状态下埋在session中的一个值，通过这个值去判断
	// 过滤掉登陆的接口
	if(req.url.split('?')[0] === '/v1/loginIn'){
		next() ;
		return ;
	}

	// 表示已经登陆
	// 包含isLogin登陆状态，将content上下文交给后面的中间件
	if( req.session && req.session.hasOwnProperty('isLogin') && req.session.isLogin * 1 === 1 ) {
		next() ;
		return ;
	}

	// 表示未登陆 TODO
	if( req.session && (!req.session.hasOwnProperty('isLogin') || req.session.isLogin * 1 === 0) ) {
		res.send( bs.returnFailedStatus('please login in first .' , 'NOT_LOGIN' ) );
		return ;
	}
} ;

module.exports = Authentication ;