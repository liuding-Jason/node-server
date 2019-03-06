/*
	intro : program detail controller
	Author : chenchao
	Date : 2019-03-05
*/

import BaseController from "../base/index" ;

class ProgramDetail extends BaseController{

	constructor(){
		super() ;
	}

	getProgramDetailById(req , res , next){
		res.send('program') ;
	}

} ;

module.exports = new ProgramDetail() ;