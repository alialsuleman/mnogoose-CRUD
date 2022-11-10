const express = require ('express') ;


const dbCofig = require("./config/mondodb").url ;
const mongoose = require('mongoose');
mongoose.connect(dbCofig)
.then(()=>{
    console.log("connection Sucess"); 
})
.catch((err)=>{
    console.log("error") ;
    process.exit() ;
})




const app = express() ;


app.use(express.urlencoded({ extended: false }))
app.use(express.json());

require('./app/routes/cart')(app) ;





app.listen(8080 , ()=>{
    console.log("server is listen in port 8080") ;
})