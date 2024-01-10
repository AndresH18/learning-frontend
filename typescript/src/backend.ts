import {IEmployee} from "./IEmployee.js";

export class Backend implements IEmployee {
    constructor(private _name: string, private _currentProject: string) {
    }

    get currentProject(): string {
        return this._currentProject;
    }

    get name(): string {
        return this._name;
    }
}