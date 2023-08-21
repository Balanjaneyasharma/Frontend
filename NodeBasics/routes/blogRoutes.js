const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');


const ensureAuthenticated = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/log')
}


router.get('/',ensureAuthenticated , (req,res)=>{
    Blog.find({Author : req.session.userName}).sort({createdAt: -1})
    .then((result)=>{
        res.render('blogs',{blogs : result});
    })
    .catch((err)=>console.log(err));
})
// single -- blog
router.get('/:id', ensureAuthenticated,(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('single',{blog: result})
    }).catch((err)=>res.send(404).send("<h1>404 not found</br>:)"));
})
//update
router.get('/update/:id',ensureAuthenticated,(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('update',{blog:result})
    })
    .catch((err)=>console.log(err));
})


//create
router.post('/',ensureAuthenticated,(req,res)=>{
    const blog = new Blog({
        title : req.body.title,
        snippet : req.body.snippet,
        body : req.body.body,
        Author : req.session.userName
    })
    blog.save()
    .then((result)=>{
        res.redirect('/blogs');
    })
    .catch((err)=>console.log(err));
})
//delete
router.delete('/:id',ensureAuthenticated,(req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then((result)=>{
        res.json({redirect : '/blogs'});
    }).catch((err)=>console.log(err))
})
//Update
router.post('/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndUpdate(id,{
        title : req.body.title,
        snippet : req.body.snippet,
        body : req.body.body,
    })
    .then((result)=>{
        res.redirect(`/blogs/${req.params.id}`);
    })
    .catch((err)=>console.log(err))
})



module.exports = router;