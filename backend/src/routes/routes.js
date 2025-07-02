const Router=require("express");
const router=Router();
const {userResister} =require("../controllers/userControllers")
const {loginUser}=require("../controllers/userControllers");
const authorization=require("../middleware/verifyUser");
const {addSymptom}=require("../controllers/symptomControlers");
const {getAllSymptomsOfUser}=require("../controllers/symptomControlers");

router.route("/resister").post(userResister)
router.route("/login").post(loginUser)

router.route("/addSymptom").post(authorization,addSymptom)
router.route("/getSymptoms").get(authorization,getAllSymptomsOfUser)



module.exports=router;