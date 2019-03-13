/*
	intro : redis cluster connect config
	Author : chenchao
	Date : 2019-03-12
*/

// define redis config
// redis cluster 
const rdconfig = {
	host : '10.252.184.16' ,
	port : [0 , 1 , 2 , 3 , 4 , 5].map((item) => { return 7000 + item }) ,
	password : '123456'
} ;

module.exports = rdconfig ;