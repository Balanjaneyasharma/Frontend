const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new schema({
    title :{
        type: String,
        required  : true,
    },
    snippet : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    Author :{
        type : String,
        immutable : true,
        required : true
    },
    createdAt : {
        type : Date,
        default : ()=> Date.now(),
        immutable : true
    },
    updatedAt : {
        type : Date,
        default : () => Date.now()
    }

},
{timestamps : true});
const Blog = mongoose.model('Blog',blogSchema)
module.exports = Blog;