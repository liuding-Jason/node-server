/*
	intro : v1 router defination
	Author : chenchao
	Date : 2019-03-05
	Note : when define routers , use bind function to change router scope
*/
import express from "express" ;
import { 
	Login ,
	NumberList , 
	NumberDetail ,
	ProgramList ,
	ProgramDetail ,
	GradeList
} from "../../controller/index" ;

// init router
const router = express.Router() ;

// login
router.get('/signUp' , Login.signUp.bind(Login)) ;

router.get('/loginIn' , Login.loginIn.bind(Login)) ;
router.get('/loginOut' , Login.loginOut.bind(Login)) ;

// router defination
router.get('/numberList' , NumberList.getNumberList.bind(NumberList)) ;
router.get('/createNumber' , NumberList.runCreateNumber.bind(NumberList)) ;
router.get('/numberDetail/:numberId' , NumberDetail.getNumberDetailById.bind(NumberList)) ;

router.get('/programList' , ProgramList.getProgramList.bind(ProgramList)) ;
router.get('/programDetail/:programId' , ProgramDetail.getProgramDetailById.bind(ProgramList)) ;

router.get('/gradeList' , GradeList.getGradeList.bind(GradeList)) ;

module.exports = router ;




