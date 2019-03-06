/*
	intro : number list controller defination
	Author : chenchao
	Date : 2019-03-05
*/
import BaseController from "../base/index" ; 

// import db
import db from "../../db/pool" ;

class NumberList extends BaseController {

	constructor(){
		super() ;
		
	}

	getNumberList(req , res , next){
		// get data from database
		const sql = 'select * from number' ;

		db.query(sql , (err , result) => {
			if(err){
				res.send( 'number query failed.' ) ;
				return ;
			}
			res.send({
				numberList : result
			}) ;
		}) ;
	}
} ;

module.exports = new NumberList() ;