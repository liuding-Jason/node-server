/*
	intro : number list controller defination
	Author : chenchao
	Date : 2019-03-05
*/
import BaseController from "../base/index" ; 

class NumberList extends BaseController {

	constructor(){
		super() ;
	}

	async getNumberList(req , res , next){
		let { pageNum = 1 , pageSize = 10 } = req.query || {} ;
		let start = (pageNum * 1 - 1 ) * pageSize ;
		// get data from database
		const sql = `select * from number limit ${start} , ${pageSize} ;` ;
		
		this.runDBQuery(sql)
		.then((result) => {
			res.send( this.returnSuccessStatus({ numberList : result }) ) ;
			return ;
		})
		.catch((err) => { 
			res.send(this.returnFailedStatus('number query failed.')) ; 
		}) ;
	}

	async runCreateNumber(req , res , next){
		let { query } = req ;
		let {name = '' , sex = '' , grade = ''} = query ;
		if(name === '' || sex === '' || grade === '') return ;

		// connect sql
		const sql = `INSERT INTO number (name , sex , grade) VALUES ( '${name}' , ${sex} , ${grade} );` ;
		
		this.runDBQuery(sql).then((result) => {
			res.send( this.returnSuccessStatus() );
		})
		.catch((err) => { 
			res.send(this.returnFailedStatus('create number failed.')) ; 
		}) ;
	}

} ;

module.exports = new NumberList() ;