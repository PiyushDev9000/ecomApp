import express from "express";
import { createCategoryController, deleteCategoryCOntroller,updateCategoryController,singleCategoryController, categoryControlller } from "../controllers/categoryController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router()


//routes
router.post('/create-category', requireSignIn,isAdmin, createCategoryController) 
router.put('/update-category/:id', requireSignIn,isAdmin, updateCategoryController) 
router.get('/get-category', categoryControlller) 
router.get('/single-category/:slug', singleCategoryController) 
router.delete('/delete-category/:id',requireSignIn,isAdmin, deleteCategoryCOntroller) 


export default router
