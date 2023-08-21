const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const { route } = require('./blogRoutes');


router.get('/',(req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('people/blogs',{blogs : result});
    })
    .catch((err)=>console.log(err));
})
router.get('/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('people/single',{blog: result})
    }).catch((err)=>res.send(404).send("<h1>404 not found</br>:)"));
})

module.exports = router;