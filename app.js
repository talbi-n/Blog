//all requires 
const express= require("express");
const mongoose= require("mongoose");
const blogRoutes = require('./routes/blogRoutes');
const morgan=require('morgan')

//create our express app 
const app = express();

//connect mongodb using URL 
const dbURI="mongodb+srv://test:test@node.j3nzrnb.mongodb.net/Node?retryWrites=true&w=majority"
mongoose.set("strictQuery", false);
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res)=>{app.listen(3000);console.log("--------------------connected--------------------");})
.catch((err)=>{console.log(err)})

//allow ejs in our app 
app.set("view engine","ejs")
//statics 
app.use(express.static("static"))
//urluncoded to send data as url
app.use(express.urlencoded({extended:true}))
//display particular informations abbout requests get , post ...
app.use(morgan("dev"))
//the main routes 
app.get('/',(req,res)=>{res.redirect('/blogs')})
app.get('/about',(req,res)=>{
    res.render("about",{title:"about "}) 
})
app.use('/blogs', blogRoutes);
//this is middleware to handle in-exsist  pages 
app.use((req,res)=>{
    res.status(404).render("404")
})
