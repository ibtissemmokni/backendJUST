const mongoose = require('mongoose')
const  bcrypt= require('bcryptjs');
const Schema = mongoose.Schema ;
const quotationShema = mongoose.model('quotation', new mongoose.Schema(
{
   quotationNUM:{
                 type: String,
                 required: true,
                  trim: true,
            },
       firstName:{
                 type: String,
                 required: true,
                 trim: true,
            },
        listName:{
                 type: String,
                 required: true,
                 trim: true,
           },
        buyerID:{
                 type: String,
                 required: true,
                 trim: true,
            },
        status:{
                 type: String,
                 required: true,
                 trim: true,
             },
        date:{
                 type: Date,
                 required: true,
                 trim: true,
             },
        total:{
                 type: Number,
                 required: true,
                 trim: true,
            },
        tax:{
                 type: Number,
                 required: true,
                 trim: true,
            },
        subtotal:{
                 type: Number,
                 required: true,
                 trim: true,
             },
 
}
)


)
module.exports=quotationShema;