//firstly we import the model of the database
const Blog = require("../models/Blog")


//the controller of index page witch contain all blogs added
const blog_index = (req, res) => {
    //find all blogs --data-- in the database *** find is promise witch have then responding ***
    Blog.find()
        .then((result) => {
            //si résultats retournés render index page with the variables title and blogs
            res.render('index', { title: 'blogs', blogs: result })
        })
        .catch((err) => console.log(err))
}

//the controller of create blog page witch contain form to add new  blog
const blog_create = (req, res) => {
    //when this request is down return the form page with the variabe title
    res.render("create_blog", { title: "create new blog" })
}

//the controller of getting blog by id -to display blog details -
const blog_get_by_id = (req, res) => {
    //récupération de id from request params
    const id = req.params.id;
    //find by id
    Blog.findById(id)
        .then((result) => {
            res.render('details', { title: 'blog details', blog: result })
        })
        .catch((err) => console.log(err))
}

//controller to delete by Id 
const blog_delete_by_id = (req, res) => {
    //récupération de id from request params

    const id = req.params.id;
    //find by id and delete 
    Blog.findByIdAndDelete(id)
        .then((result) => {
            // this is json responding -- we could not render from backend --we using vanilla javascript to render -- because this is an ajax request--redirect from the frontend 
            res.json({ redirect: '/blogs' })
        })
        .catch((err) => console.log(err))

}
//controller to post--add-- new blog to the database 
const blog_post = (req, res) => {
    //create new blog from Blog model with parameters stored on req.body 
    const blog = new Blog(req.body)
    //after creating we save model
    blog.save()
        .then((result) => res.redirect("/blogs"))
        .catch((err) => console.log(err))

}
//export all controllers 
module.exports = {
    blog_index,
    blog_create,
    blog_get_by_id,
    blog_delete_by_id,
    blog_post
}