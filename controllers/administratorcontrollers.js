const administratormodels = require('../models/administratormodels')
const fs = require("fs")
const multer = require("multer")
const upload = multer({dest:__dirname+"/uploads/images"})// win bech yetsabo les images (dirname)


module.exports={
   add : function(req , res){
    var file=__dirname+"/uploads/images"+req.file.originalname
    fs.readFile(req.file.path,function(err,vendeur){// lire l'image
    fs.writeFile(file,vendeur,function(err){
        if(err){
            res.json({ state:'no', msg:'you have a error'})
        }
        else{
            const administrator = new administratormodels({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                address: req.body.address,
                phone: req.body.phone,
                email: req.body.email,
                password: req.body.password,
                companyName: req.body.companyName,
                secteur: req.body.secteur,
                occupation: req.body.occupation,
                governote: req.body.governote,
                avatar:req.file.originalname,

            });

            administrator.save(function(err){
             if (err){
                 console.log(err)
            
             res.json({state: 'no', msg:'you have a error '}) // type de retour est un objet Json   
            }
            else{
                res.json({state:'yes',msg:'administrator sent'})
            }
 
         })

        }
    })
})

          
   },
   getall: function(req,res){
    administratormodels.find//find c'est une methode utilise pour chercher les donnees dans une collection
    administratormodels.find({},function(err,data){
        if(err){// test de base de donne
            res.json({state:'no', msg:'you have a error'}
            )
                }
            else{ 
                res.json(data)//data te5edhlek donnees eli fi base
            }
    })
},
    getbyId: function(req,res){
   administratormodels.findOne({_id:req.params.id},function(err,administrator){//params:path
        if(err){
            res.json({state:"no",msg:"you have a error"})
        }
        else{
            res.json(administrator)
        }
    })

   },
   delete: function(req,res){
    administratormodels.deleteOne({_id:req.params.id},function(err){
        if(err){
            res.json({state:"no",msg:"you have a error"})
        }
        else{
            res.json({state:"yes",msg:"administrator deleted"})
        }
    })   
    
},
update: function(req,res){
  administratormodels.updateOne({_id:req.params.id},{$set:req.body}, 
        {
           
                   firstName: req.body.firstName,
                   lastName: req.body.lastName,
                   address: req.body.address,
                   phone: req.body.phone,
                   email: req.body.email,
                   password: req.body.password,
                   companyName: req.body.companyName,
                   secteur: req.body.secteur,
                   occupation: req.body.occupation,
                   governote: req.body.governote,
                   avatar:req.file.originalname,

        },
        function(err,administrator){
            if(err){
                res.json({state:"no",msg:"you have a error"})
            }
            else{
                res.json(administrator)
            }
            

        }

    )},
  


}