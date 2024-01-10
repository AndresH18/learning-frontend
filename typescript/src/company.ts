import {Employee} from "./employee.js";

export class Company {
    private employees: Employee[] = []

    add(employee: Employee): void {
        this.employees.push(employee)
    }

    getProjectsList(): string[] {
        return this.employees.map(e => e.currentProject)
    }

    getEmployeesNames() : string[] {
        return this.employees.map(e => e.name)
    }
}