const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const blogrouter = require('./routes/blogRoutes');
const userrouter = require('./routes/userRoutes');
const Login = require('./models/login');

// express app

const app = express();
const oneDay = 1000 * 60 * 60 * 24;



// connect to mongoDB

const dbURI = 'mongodb+srv://BaluSharma:NeverReveal@cluster0.lifmsbt.mongodb.net/Nodejs?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true,useUnifiedTopology : true})
.then((result)=>{
    console.log('Connected to Database');
    app.listen(12383,()=>{
        console.log(`listening to port ${12383}`);
    })
})
.catch((err)=> {
    console.log(err)
});


// register view engine
app.set('view engine','ejs');
// middleware && static files
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:false,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({usernameField : 'userName'},async(userName , password , done)=>{
    console.log(userName);
    Login.findOne({ name : userName})
    .then(async (user)=>{
        console.log(user);
        if(!user){
            return done(null,false);
        }
        try{
            if(await bcrypt.compare(password, user.password)){
                return done(null,user);
            }
            else{
                return done(null,false);
            }
        }
        catch(e){
            return done(e);
        }
        
    })
    .catch((err)=>console.log(err))
}));
passport.serializeUser((user , done)=>{
    done(null,user._id);
});
passport.deserializeUser((id,done)=>{
    done(null,{id});
}); 

//login-page
app.get('/log',(req,res)=>{
    res.render('login');
})
//register-page
app.get('/reg',(req,res)=>{
    res.render('register');
})
//authenticating
app.post('/login', passport.authenticate('local',{ failureRedirect: '/reg'}) ,(req,res,next)=>{
    req.session.userName = req.body.userName;  
    console.log(session);
    res.redirect('/blogs');
})
// posting details
app.post('/register',async(req,res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        const login  = new Login({
            name : req.body.name,
            password : hashedPassword
        })
        login.save()
        .then((result)=>{
            res.redirect('/log');
        })
        .catch((err)=>console.log(err));
    }catch{
        res.redirect('/reg');
    } 
})
// auth

//authenticating
/*app.post('/login', passport.authenticate('local'),(req,res)=>{
    req.session.userName = req.body.name;
    console.log(req.session);
    Login.findOne({name : req.body.name})
    .then((result)=>{
        console.log(result);
        if(result.password == req.body.password){
            res.redirect('/blogs');
        }
        else res.redirect('/log');
    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/log');
    })
    
})*/


//addding user to db

app.get('/add-user',(req,res)=>{
    const login = new Login({
        name : "kelvihkhkhn",
        password : "itsok"
    });
    login.save()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>console.log(err));
})


app.use('/users',userrouter);
app.use('/blogs',blogrouter);


//routes
app.get('/',(req,res)=>{
    console.log('home');
    res.redirect('/users');
})
app.get('/create',(req,res)=>{
    res.render('create');
})
app.get('/logout',(req,res)=>{
    req.session.destroy;
    res.render('login');
})
app.use((req,res)=>{
    console.log('error 404');
    res.status(404).send("<h1> 404 </br>Error Page  Not Found:)");
})











































































// mongoose and mongo sandbox routes
/*app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title : 'Sehari',
        snippet : 'about a  song',
        body : 'Its is  a song in oy! movie dude that it '
    });
    blog.save()
    .then((result)=>{
        console.log('success');
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
        res.send(err);
    })
});*/
/*
// blog-routes
app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('blogs',{blogs : result});
    })
    .catch((err)=>console.log(err));
})
// single -- blog
app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('single',{blog: result})
    }).catch((err)=>console.log(err));
})
app.get('/update/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('update',{blog:result})
    })
    .catch((err)=>console.log(err));
})


//post
app.post('/blogs',(req,res)=>{
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/blogs');
    })
    .catch((err)=>console.log(err));
})
//delete
app.delete('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then((result)=>{
        res.json({redirect : '/blogs'});
    }).catch((err)=>console.log(err))
})
//Update
app.post('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndUpdate(id,{
        title : req.body.title,
        snippet : req.body.snippet,
        body : req.body.body
    })
    .then((result)=>{
        res.redirect(`/blogs/${req.params.id}`);
    })
    .catch((err)=>console.log(err))
})

*/