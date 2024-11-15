import express from "express";

import { createAdmin } from "../controllers/userController.js";   //import function
import { createAlumni } from "../controllers/userController.js";
import { createStudent,getAllUsers } from "../controllers/userController.js";
import { createCompany, getCompanies } from "../controllers/companyController.js";
import { createReview,getAllReviews } from "../controllers/reviewController.js";
import { likeReviews } from "../controllers/likesController.js";
import { isAdmin } from "../middleware/Middleware.js";

const router=express.Router()

router.post("/admin/create",createAdmin)
router.post("/alumni/create",createAlumni)
router.post("/student/create",createStudent)
router.post("/company/create",isAdmin,createCompany)
router.post("/review/create",createReview)
router.post("/likes/add",likeReviews)
router.get("/user/get",getAllUsers)
router.get("/company/get",getCompanies)
router.get("/review/get",getAllReviews)

export default router;