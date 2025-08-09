import express from 'express';
import Controller from '../../controller/index.controller.js';

const v1Router = express.Router();

// Signup for student...
// /api/v1/signup/student

v1Router.post('/signup/student', Controller.SignupStudent);

export default v1Router;