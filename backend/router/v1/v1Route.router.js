import express from 'express';
import Controller from '../../controller/index.controller.js';
import upload from '../../middlewares/multer.middleware.js';

const v1Router = express.Router();

// Signup for student...
// /api/v1/signup/student

v1Router.post('/signup/student', upload.single("profileImage"), Controller.SignupStudent);

export default v1Router;