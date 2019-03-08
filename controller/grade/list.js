/*
	intro : grade list controller
	Author : chenchao
	Date : 2019-03-08
*/

import BaseController from "../base/index" ; 

import db from "../../db/pool" ;

class GradeList extends BaseController {

	constructor(){
		super() ;
		this.getGradeList = this.getGradeList.bind(this) ;
	}
	// get grade list
	getGradeList(req , res , next){
		// sql define
		const sql = "select * from grade" ;
		// run query
		db.query(sql , (err , result) => {
			if(err){
				res.send(this.returnFailedStatus('grade query failed')) ;
				return ;
			}
			res.send(this.returnSuccessStatus({
				gradeList : result
			})) ;
		}) ;
	}
} ;

module.exports = new GradeList() ;