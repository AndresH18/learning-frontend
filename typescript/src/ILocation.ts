import {IEmployee} from "./IEmployee.js";
import {Employee} from "./employee.js";

export interface ILocation {
    addPerson(employee: Employee): void
    getPerson(index: number): Employee | undefined
    getCount(): number
}