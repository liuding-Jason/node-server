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

	getNumberList(req , res , next){
		res.send('numbers') ;
	}

} ;

module.exports = new NumberList() ;