/*
	intro : program list controller
	Author : chenchao
	Date : 2019-03-05
*/
import BaseController from "../base/index" ;

class ProgramList extends BaseController{

	constructor(){
		super() ;
	}

	getProgramList(req , res , next){
		res.send('programlist') ;
	}

} ;

module.exports = new ProgramList() ;