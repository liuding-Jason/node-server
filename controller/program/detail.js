/*
	intro : program detail controller
	Author : chenchao
	Date : 2019-03-05
*/

class ProgramDetail {

	constructor(){

	}

	getProgramDetailById(req , res , next){
		res.send('program') ;
	}

} ;

module.exports = new ProgramDetail() ;