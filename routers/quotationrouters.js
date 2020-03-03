const quotationcontrollers = require('../controllers/quotationcontrollers')
const router = require('express').Router();

router.post("/add",quotationcontrollers.add)//ajouteruser eli bech tetlaa fil url mtaa postman
router.get("/getall",quotationcontrollers.getallquotation)//routage fonction affichage;lister path
router.get("/getbyid/:id",quotationcontrollers.getbyId)
router.delete("/delete/:id",quotationcontrollers.delete)
router.put("/update/:id",quotationcontrollers.update)


module.exports=router;