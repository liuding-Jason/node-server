/*
	intro : v1 router defination
	Author : chenchao
	Date : 2019-03-05
*/
import express from "express" ;
import { 
	NumberList , 
	NumberDetail ,
	ProgramList ,
	ProgramDetail 
} from "../../controller/index" ;

// init router
const router = express.Router() ;

// router defination
router.get('/numberList' , NumberList.getNumberList) ;
router.get('/numberDetail/:numberId' , NumberDetail.getNumberDetailById) ;

router.get('/programList' , ProgramList.getProgramList) ;
router.get('/programDetail/:programId' , ProgramDetail.getProgramDetailById) ;

module.exports = router ;




