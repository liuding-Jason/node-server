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
	ProgramDetail ,
	GradeList
} from "../../controller/index" ;

// init router
const router = express.Router() ;

// router defination
router.get('/numberList' , NumberList.getNumberList) ;
router.get('/createNumber' , NumberList.runCreateNumber) ;
router.get('/numberDetail/:numberId' , NumberDetail.getNumberDetailById) ;

router.get('/programList' , ProgramList.getProgramList) ;
router.get('/programDetail/:programId' , ProgramDetail.getProgramDetailById) ;

router.get('/gradeList' , GradeList.getGradeList) ;

module.exports = router ;




