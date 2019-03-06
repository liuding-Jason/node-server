/*
	intro : number list controller defination
	Author : chenchao
	Date : 2019-03-05
*/
import BaseController from "../base/index" ;

class NumberDetail extends BaseController{

	constructor(){
		super() ;
	}

	getNumberDetailById(req , res , next){
		res.send("NumberDetail") ;
	}

} ;

module.exports = new NumberDetail() ;