import {IEmployee} from "./IEmployee.js";
import {ILocation} from "./ILocation.js";
import {Employee} from "./employee.js";

export class Company {

    constructor(private _location: ILocation) {
    }

    add(employee: Employee): void {
        this._location.addPerson(employee)
    }

    getProjectsList(): string[] {
        const projects: string[] = []
        for (let i = 0; i < this._location.getCount(); i++) {
            let employee = this._location.getPerson(i)
            if (employee)
                projects.push(employee.currentProject)
        }
        return projects
    }

    getEmployeesNames(): string[] {
        const names: string[] = []
        for (let i = 0; i < this._location.getCount(); i++) {
            let employee = this._location.getPerson(i)
            if (employee)
                names.push(employee.name)
        }
        return names
    }
}