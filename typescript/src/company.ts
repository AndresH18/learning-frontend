import {Employee} from "./employee.js";
import {IEmployee} from "./IEmployee.js";

export class Company {
    private employees: IEmployee[] = []

    add(employee: IEmployee): void {
        this.employees.push(employee)
    }

    getProjectsList(): string[] {
        return this.employees.map(e => e.currentProject)
    }

    getEmployeesNames() : string[] {
        return this.employees.map(e => e.name)
    }
}