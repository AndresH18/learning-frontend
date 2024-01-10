import {Employee} from "./employee.js";
import {Company} from "./company.js";
import {CompanyLocationArray, CompanyLocationLocalStorage} from "./Location.js";


let e1: Employee = new Employee("Andres", "Super project 1"),
    e2: Employee = new Employee("David", "Frontend project 1"),
    e3: Employee = new Employee("Davdres", "Backend project 1");

const company1 = new Company(new CompanyLocationArray())
company1.add(e1)
company1.add(e2)
company1.add(e3)

let names = company1.getEmployeesNames()
let projects = company1.getProjectsList()

console.log(names)
console.log(projects)

console.log("British company")

const company2 = new Company(new CompanyLocationLocalStorage())
company2.add(new Employee("AndresDavid", "British project 1"))
company2.add(new Employee("British Andres", "British project 2"))
company2.add(new Employee("British David", "British project 3"))

names = company2.getEmployeesNames()
projects = company2.getProjectsList()

console.log(names)
console.log(projects)