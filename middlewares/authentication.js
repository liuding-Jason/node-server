/*
	intro : authentication middleware defination
	Author : chenchao
	Date : 2019-03-12
	note : isLogin 是登陆状态下埋在session中的一个值，通过这个值去判断
*/

import BaseController from "../controller/base/index" ;

const bs = new BaseController() ;

const Authentication = (req , res , next) => {

	// 1、验证session是否初始化完成
	if(!req.hasOwnProperty('session')){
		res.send( bs.returnFailedStatus('session initial failed' , 'SERVER_INTERNEL_ERROR') ) ;
		return ;
	}

	// 2、过滤掉登陆的接口
	if(['/v1/loginIn'].indexOf(req.url.split('?')[0]) >= 0){
		next() ;
		return ;
	}

	// 3、表示已经登陆
	// 包含isLogin登陆状态，将content上下文交给后面的中间件
	if( req.session.hasOwnProperty('isLogin') && req.session.isLogin * 1 === 1 ) {
		next() ;
		return ;
	}

	// 4、表示未登陆，要求登陆
	// 如果服务端做跳转的话，也可以res.redirect()
	if( !req.session.hasOwnProperty('isLogin') || req.session.isLogin * 1 === 0 ) {
		res.send( bs.returnFailedStatus('please login in first .' , 'NOT_LOGIN' ) );
		return ;
	}
} ;

module.exports = Authentication ;