import {ILocation} from "./ILocation.js";
import {Employee} from "./employee.js";

class CompanyLocationArray implements ILocation {
    private readonly _employees: Employee[] = []

    addPerson(employee: Employee): void {
        this._employees.push(employee)
    }

    getCount(): number {
        return this._employees.length
    }

    getPerson(index: number): Employee {
        return this._employees[index];
    }
}

class CompanyLocationLocalStorage implements ILocation {
    private readonly LOCAL_STORAGE_KEY: string = "MY_EMPLOYEES_LOCAL_STORAGE_KEY"

    getCount(): number {
        return this.getLocalStorage().length
    }

    getPerson(index: number): Employee | undefined {
        const employees = this.getLocalStorage()
        return (employees[index]) ? Employee.fromJSON(employees[index]) : undefined
    }

    addPerson(employee: Employee): void {
        const employees = this.getLocalStorage()
        employees.push(employee.toJSON())
        this.saveLocalStorage(employees)
    }

    private getLocalStorage(): string[] {
        const s = localStorage.getItem(this.LOCAL_STORAGE_KEY)
        return s ? JSON.parse(s) : []
    }

    private saveLocalStorage(employees: string[]): void {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(employees))
    }
}

export {CompanyLocationArray, CompanyLocationLocalStorage};
