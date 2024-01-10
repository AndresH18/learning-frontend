var Company = /** @class */ (function () {
    function Company(_location) {
        this._location = _location;
    }
    Company.prototype.add = function (employee) {
        this._location.addPerson(employee);
    };
    Company.prototype.getProjectsList = function () {
        var projects = [];
        for (var i = 0; i < this._location.getCount(); i++) {
            var employee = this._location.getPerson(i);
            if (employee)
                projects.push(employee.currentProject);
        }
        return projects;
    };
    Company.prototype.getEmployeesNames = function () {
        var names = [];
        for (var i = 0; i < this._location.getCount(); i++) {
            var employee = this._location.getPerson(i);
            if (employee)
                names.push(employee.name);
        }
        return names;
    };
    return Company;
}());
export { Company };
