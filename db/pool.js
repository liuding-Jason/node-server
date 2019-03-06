/*
	intro : node connect mysql through connection pool
	Author : chenchao
	Date : 2019-03-05
*/

import mysql from "mysql" ;

//  db config
import { dbconfig } from "../config/index" ;

// init database config
const myDbConfig = dbconfig('test') ;

// init pool
const pool = mysql.createPool(myDbConfig) ;

// @sql - sql structor
// @p - param
// @c - callback
const query = function(sql , P , C){
	let params = [] , callback = '' ;

	// arguments judge
	if (arguments.length == 2 && typeof arguments[1] == 'function') {
    callback = P ;
  } else if (arguments.length == 3 && Array.isArray(arguments[1]) && typeof arguments[2] == 'function') {
    params = P ;
    callback = C ;
  } else {
    throw new Error('对不起，参数个数不匹配或者参数类型错误') ;
  }

  // 从池子里面拿一个可以使用的连接
  pool.getConnection(function (error, connection) {
    // Use the connection
    connection.query(sql, params, function () {
      // 使用完毕之后，将该连接释放回连接池
      connection.release() ;
      if(error) throw error ;
      callback && callback.apply(null, arguments) ;
    });
  });
} ;

module.exports = { query } ;

