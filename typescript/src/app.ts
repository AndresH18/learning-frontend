import {Employee} from "./employee.js";
import {Frontend} from "./frontend.js";
import {Backend} from "./backend.js";
import {Company} from "./company.js";
import {IEmployee} from "./IEmployee.js";


let e1: IEmployee = new Employee("Andres", "Super project 1"),
    e2: IEmployee = new Frontend("David", "Frontend project 1"),
    e3: IEmployee = new Backend("Davdres", "Backend project 1");
const company = new Company()
company.add(e1)
company.add(e2)
company.add(e3)

const names = company.getEmployeesNames()
const projects = company.getProjectsList()

console.log(names)
console.log(projects)