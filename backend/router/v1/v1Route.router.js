import express from 'express';
import Controller from '../../controller/index.controller.js';
import upload from '../../middlewares/multer.middleware.js';

const v1Router = express.Router();

// Signup for student...
// /api/v1/signup/student

v1Router.post('/signup/student', upload.single("profileImage"), Controller.SignupStudent);

// Signup for teacher...
// /api/v1/stgnup/teacher
v1Router.post('/signup/teacher', upload.single('profileImage'), Controller.SignupTeacher);

export default v1Router;