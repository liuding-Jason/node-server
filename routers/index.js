/*
	intro : router export
	Author : chenchao
	Date : 2019-03-05
*/
import config from "../config/index" ;

// export router version link
// change controller version through config.version
const routerLink = `./${config.controllerVersion}/index` ;
const router = require(routerLink) ;

module.exports = router || {} ;

