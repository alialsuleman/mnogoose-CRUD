
const Post = require("../models/post.model");


exports.find = (req,res)=>{
  
  // Post.where("createAt").lt("2022-11-10T08:57:47.463Z").then((p)=>{res.send(p)}).catch( ()=>console.log("error"))
  Post.where().then((p)=>res.send(p)).catch((err)=>console.log(err)) ;
} 
exports.findByTime = (req,res) =>{
   let start =new Date(req.params.start) ;
   let end  = new Date (req.params.end) ;
   console.log(start) ;
   Post.where("createAt").gte(start).lte(end).then((post)=>{res.send(post)}) ;
}

exports.create = (req, res)=>{
    console.log( req.body.text ) ;
    const post = new Post ({
        title:req.body.title  ,
        text : req.body.text ||"anyString"
    })
    post.save()
    .then(()=>{
        res.send(req.body) ;
    })
    .catch((err)=>{
        console.log(err);
    })
}
exports.update =async function (req,res){
        const post = await Post.findOne({_id:req.body.id}) ;
        post.text = req.body.text ;
        post.updateAt =Date.now();
        await post.save() ;
        res.send(post) ;
}

exports.delete =  (req,res)=>{
     //console.log(req.params.Id) ;
     Post.findByIdAndDelete(req.params.Id)
     .then(()=>{res.send({staut : "ok"})})
     .catch((err)=>{
        console.log("err");
        res.send({staut : "No"})
    }) ;
}