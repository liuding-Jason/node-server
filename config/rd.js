/*
	intro : redis cluster connect config
	Author : chenchao
	Date : 2019-03-12
*/

// define redis config
// redis cluster 
const rdconfig = {
	host : '188.131.238.88' ,
	// port : [6379] , // save for redis cluster connection
	port : [0 , 1 , 2 , 3 , 4 , 5].map((item) => { return 7000 + item }) ,
	password : '123456'
} ;

module.exports = rdconfig ;