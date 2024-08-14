
import express from "express";
import { createStudent , updateStudent } from "../controllers/studentControllers.js";
const router = express.Router();

router.post('/createStudent' , createStudent);
router.put('/updateStudent/:id' , updateStudent);

export default router;
