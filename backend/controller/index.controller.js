import studentSignUp from "./auth/StudentSignup.controller.js";
import TeacherSignUpController from "./auth/TeacherSignup.controller.js";

const Controller = {
    SignupStudent: studentSignUp, //Signup controller for students
    SignupTeacher: TeacherSignUpController, //Signup controller for teachers
}

export default Controller;