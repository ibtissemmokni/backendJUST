const express = require("express") // gerer la partir rout de l application

const quotationrouters = require('./routers/quotationrouters')// une seul point 3la 5ater manech fi dossier

const bodyparser=require('body-parser')
const base=require('./models/base');//appeler base fi server
const app = express(); //app c est un medlware contient toutes les fonctionnalites et les methodes qui offre l express


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.set('secretKey','test')//definie secretkey pour postman ya3refha


//defini fonctions ajout dans le server
app.use("/quotation",quotationrouters)// /esem table

app.listen(9500,(err)=>{ //app.listen pour la creation d un serveur c est methode asyn
    if(err){
        console.log(" error server")
    }
    else{
        console.log("server is running")
    }
})
