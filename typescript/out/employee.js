var Employee = /** @class */ (function () {
    function Employee(_name, _currentProject) {
        this._name = _name;
        this._currentProject = _currentProject;
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "currentProject", {
        get: function () {
            return this._currentProject;
        },
        set: function (value) {
            this._currentProject = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
export { Employee };
