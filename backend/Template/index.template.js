import FatherSignUpMailConfirmationMailContent from "./auth/fatherSignupMail.template.js";
import MotherSignUpMailConfirmationMailContent from "./auth/motherSignupMail.template.js";
import StudentSignUpMailConfirmationMailContent from "./auth/studentSignupMail.template.js";
import TeacherSignUpMailConfirmationMailContent from "./auth/teacherSignupMail.template.js";

const MailTemplates = {
    StudentSignupMailTemplate: StudentSignUpMailConfirmationMailContent,
    FatherSignupMailTemplate: FatherSignUpMailConfirmationMailContent,
    MotherSignupMailTemplate: MotherSignUpMailConfirmationMailContent,
    TeacherSignupMailTemplate: TeacherSignUpMailConfirmationMailContent
}

export default MailTemplates;