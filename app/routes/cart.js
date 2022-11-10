

module.exports = (app)=>{
    const  post = require('../controlles/post.controllar') ;

     app.get("/post" , post.find) ;
     app.get("/findbytime/:start/:end" ,post.findByTime) ;
     app.post("/createpost" , post.create) ;
     app.put("/update" , post.update) ;
     app.delete('/delete/:Id', post.delete);


}