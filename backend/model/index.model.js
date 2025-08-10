import Address from "./user/Address.model.js";
import Father from "./user/Father.model.js";
import Mother from "./user/Mother.model.js";
import Student from "./user/Student.model.js";
import Teacher from "./user/Teacher.model.js";

const Models = {
    FatherModel: Father, // For access Father Schema
    MotherModel: Mother, // For access Mother Schema
    StudentModel: Student, // For access Student Schema
    AddressModel: Address, // For access Address Schema
    TeacherModel: Teacher, // For access Teacher Schema
}

export default Models;