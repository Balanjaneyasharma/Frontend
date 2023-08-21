const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('user list')
})
router.get('/new',(req,res)=>{
    res.send("iuhghj")
})
router.post('/',(req,res)=>{
    res.send('create server')
})



router.route('/:id').get((req,res)=>{
    console.log(req.users)
    res.send(` get user with ${req.params.id}`);

}).put((req,res)=>{
    res.send(` update user with ${req.params.id}`);

}).delete((req,res)=>{
    res.send(` delete user with ${req.params.id}`);

})

const users = [{name : "jukk"},{name : " igkh"}]
router.param("id",(req,res,next,id)=>{
    req.users = users[id]
    next()
})

module.exports = router
