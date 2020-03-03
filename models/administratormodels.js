const mongoose = require('mongoose')
const  bcrypt= require('bcryptjs');
const Schema = mongoose.Schema ;
const administratorShema = mongoose.model('administrator', new mongoose.Schema(
{
       
       firstName:{
                 type: String,
                 required: true,
                 trim: true,
            },
        lastName:{
                 type: String,
                 required: true,
                 trim: true,
           },
        address:{
                 type: String,
                 required: true,
                 trim: true,
            },
        phone:{
                 type: Number,
                 required: true,
                 trim: true,
             },
        email:{
                 type: String,
                 required: true,
                 trim: true,
             },
        password:{
                 type: String,
                 required: true,
                 trim: true,
            },
         companyName:{
                type: String,
                required: true,
                trim: true,
           },
         secteur:{
            type: String,
            required: true,
            trim: true,
       },
       occupation:{
        type: String,
        required: true,
        trim: true,
        },
       governote:{
             type: String,
             required: true,
             trim: true,
            },
        avatar:{
                type: String,
                required: true,
                trim: true,
               },
       
}
)


)
module.exports=administratorShema;