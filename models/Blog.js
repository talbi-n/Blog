//import mongoose library
const mongoose=require('mongoose');
//create instance of schema mongoose
const Schema= mongoose.Schema;
//déclaration de structure de BDD
const BlogSchema= new Schema({
    title:{
        type : String,
        required : true

    },
    content : {
        type : String,
        required : true
  
    }
},{timestamp : true})
//attach model to schema created 
const Blog = mongoose.model("Blog",BlogSchema)
//export
module.exports = Blog;