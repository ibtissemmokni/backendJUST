const administratorcontrollers = require('../controllers/administratorcontrollers')
const router = require('express').Router();
const multer=require("multer")
const upload = multer({dest:__dirname+"/uploads/images"})



router.post("/add",upload.single("image"),administratorcontrollers.add)//ajouteruser eli bech tetlaa fil url mtaa postman
router.get("/getall",administratorcontrollers.getall)//routage fonction affichage;lister path
router.get("/getbyid/:id",administratorcontrollers.getbyId)
router.delete("/delete/:id",administratorcontrollers.delete)
router.put("/update/:id",administratorcontrollers.update)


module.exports=router;