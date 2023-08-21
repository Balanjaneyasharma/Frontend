const mongoose = require('mongoose');
const schema = mongoose.Schema;

const loginSChema = new schema({
    name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})
const Login = mongoose.model('Login',loginSChema);
module.exports = Login;