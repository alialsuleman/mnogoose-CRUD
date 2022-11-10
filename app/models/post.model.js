
const mongoose = require('mongoose') ;

const postSchema  = mongoose.Schema({
    title : String ,
    text: String ,
    createAt :{
        type:Date  ,
        immutable:true ,
        default:()=>Date.now()
    } ,
    updateAt :{
        type:Date  ,
        default:()=>Date.now() 
    }

})  ;

module.exports = mongoose.model("Post" ,postSchema ) ;