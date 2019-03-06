/*
	intro : router export with version control
	Author : chenchao
	Date : 2019-03-05
*/
import config from "../config/index" ;

const { controllerVersion = '' } = config ;

// export router version link
// change controller version through config <controllerVersion>
const routerLink = `./${controllerVersion}/index` ;
const router = require(routerLink) ;

module.exports = app => {
	app.use(`/${controllerVersion}` , router) ;
} ;