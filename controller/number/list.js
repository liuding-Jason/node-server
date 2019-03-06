/*
	intro : number list controller defination
	Author : chenchao
	Date : 2019-03-05
*/

class NumberList {

	constructor(){

	}

	getNumberList(req , res , next){
		res.send('numbers') ;
	}

} ;

module.exports = new NumberList() ;