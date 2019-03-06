/*
	intro : number list controller defination
	Author : chenchao
	Date : 2019-03-05
*/

class NumberDetail {

	constructor(){

	}

	getNumberDetailById(req , res , next){
		res.send("NumberDetail") ;
	}

} ;

module.exports = new NumberDetail() ;