// ce fichier contient les routes avec les fonctions de control associé
const express=require("express");
//create instance of express route;
const router = express.Router();
//import the controller ( witch contain the function to do )
const BlogController= require("../controllers/blogControllers")
// declare routes and there controllers
router.get('/',BlogController.blog_index)
router.get('/create',BlogController.blog_create)
router.get('/:id',BlogController.blog_get_by_id)
router.delete('/:id',BlogController.blog_delete_by_id)
router.post('/',BlogController.blog_post)
//export router
module.exports=router;