/*
	intro : grade list controller
	Author : chenchao
	Date : 2019-03-08
*/

import BaseController from "../base/index" ; 

class GradeList extends BaseController {

	constructor(){
		super() ;
		this.getGradeList = this.getGradeList.bind(this) ;
	}
	// get grade list
	getGradeList(req , res , next){
		// sql define
		const sql = "select * from grade" ;
		
		this.runDBQuery(sql)
		.then((result) => {
			res.send(this.returnSuccessStatus({ gradeList : result})) ;
		})
		.catch((err) => {
			res.send(this.returnFailedStatus('grade query failed')) ;
		})
	}
} ;

module.exports = new GradeList() ;