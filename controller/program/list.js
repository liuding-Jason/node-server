/*
	intro : program list controller
	Author : chenchao
	Date : 2019-03-05
*/

class ProgramList {

	constructor(){

	}

	getProgramList(req , res , next){
		res.send('programlist') ;
	}

} ;

module.exports = new ProgramList() ;