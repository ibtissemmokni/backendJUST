const quotationmodels = require('../models/quotationmodels')
module.exports={
   add : function(req , res){
               const quotation = new quotationmodels({
                   quotationNUM: req.body.quotationNUM,
                   firstName: req.body.firstName,
                   lastName: req.body.lastName,
                   buyerID: req.body.buyerID,
                   status: req.body.status,
                   date: req.body.date,
                   total: req.body.total,
                   tax: req.body.tax,
                   subtotal: req.body.subtotal,     
               });

               quotation.save(function(err){
                if (err){
                    console.log(err)
               
                res.json({state: 'no', msg:'you have a error '}) // type de retour est un objet Json   
               }
               else{
                   res.json({state:'yes',msg:'quotation sent'})
               }
    
            })

   },
   getallquotation: function(req,res){
    quotationmodels.find//find c'est une methode utilise pour chercher les donnees dans une collection
    quotationmodels.find({},function(err,data){
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
   quotationmodels.findOne({_id:req.params.id},function(err,quotation){//params:path
        if(err){
            res.json({state:"no",msg:"you have a error"})
        }
        else{
            res.json(quotation)
        }
    })

   },
   delete: function(req,res){
    quotationmodels.deleteOne({_id:req.params.id},function(err){
        if(err){
            res.json({state:"no",msg:"you have a error"})
        }
        else{
            res.json({state:"yes",msg:"quotation deleted"})
        }
    })   
    
},
update: function(req,res){
  quotationmodels.updateOne({_id:req.params.id},{$set:req.body}, 
        {
           
                   quotationNUM: req.body.quotationNUM,
                   firstName: req.body.firstName,
                   lastName: req.body.lastName,
                   buyerID: req.body.buyerID,
                   status: req.body.status,
                   date: req.body.date,
                   total: req.body.total,
                   tax: req.body.tax,
                   subtotal: req.body.subtotal,

        },
        function(err,quotation){
            if(err){
                res.json({state:"no",msg:"you have a error"})
            }
            else{
                res.json(quotation)
            }
            

        }

    )},
  


}