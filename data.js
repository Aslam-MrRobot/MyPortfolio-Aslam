let express = require("express");
const fs = require("fs");
const http = require("http");
let path = require('path');
let bodyparser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/aslamzone', { useNewUrlParser: true, useUnifiedTopology: true });

let app = express();
let port = 8000;

const kittyschema = new mongoose.Schema({
    name:String,
    number:String,
    email:String,
    address:String,
    dsc:String
});

const Contact = mongoose.model('Contact',kittyschema);

app.use("/static",express.static("static"));
app.use(express.urlencoded());

app.set("view engine","pug");
app.set('views',path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    let params = {"title":"Aslam-portfolio site"}
    res.render("home.pug",params);
});

app.get("/about",(req,res)=>{
    
    res.render("about.pug");
});

app.get("/services",(req,res)=>{
    
    res.render("services.pug");
});

app.get("/recentwork",(req,res)=>{
    
    res.render("recentwork.pug");
});

app.get("/contact",(req,res)=>{
    
    res.render("contact.pug");
});

app.post('/contact',(req,res)=>{
    let mydata = new Contact(req.body);
    mydata.save().then(()=>{
        res.send("Data send successfully!!");
    }).catch(()=>{
        res.statusCode(400).send('Network Error. Data not send..');
    })
});

app.listen(port,()=>{
    console.log(`your site is running on this port: ${port}`);
})

