import {IEmployee} from "./IEmployee.js";

export class Employee implements IEmployee{
    constructor(private _name: string, private _currentProject: string) {
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get currentProject(): string {
        return this._currentProject;
    }

    set currentProject(value: string) {
        this._currentProject = value;
    }

    static fromJSON(json: string): Employee {
        console.log(json)
        const parsed = JSON.parse(json);
        return new Employee(parsed._name, parsed._currentProject);
    }

    toJSON(): string {
        return JSON.stringify({ _name: this._name, _currentProject: this._currentProject });
    }
}