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
		// TODO why bind
		this.getNumberList = this.getNumberList.bind(this) ;
		this.runCreateNumber = this.runCreateNumber.bind(this) ;
	}

	async getNumberList(req , res , next){
		let { pageNum = 1 , pageSize = 10 } = req.query || {} ;
		let start = (pageNum * 1 - 1 ) * pageSize ;
		// get data from database
		const sql = `select * from number limit ${start} , ${pageSize} ;` ;

		db.query(sql , (err , result) => {
			if(err){
				res.send( this.returnFailedStatus('number query failed.') ) ;
				return ;
			}
			res.send(this.returnSuccessStatus({
				numberList : result
			})) ;
		}) ;
	}

	async runCreateNumber(req , res , next){

		let { query } = req ;
		let {name = '' , sex = '' , grade = ''} = query ;
		if(name === '' || sex === '' || grade === '') return ;

		// connect sql
		const sql = `INSERT INTO number (name , sex , grade) VALUES ( '${name}' , ${sex} , ${grade} );` ;
		console.log(sql) ;
		// run sql
		db.query(sql , (err , result) => {
			if(err){
				res.send( this.returnFailedStatus('create number failed.') ) ;
				return ;
			}
			res.send( this.returnSuccessStatus()) ;
		}) ;
	}

} ;

module.exports = new NumberList() ;