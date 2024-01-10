var Company = /** @class */ (function () {
    function Company() {
        this.employees = [];
    }
    Company.prototype.add = function (employee) {
        this.employees.push(employee);
    };
    Company.prototype.getProjectsList = function () {
        return this.employees.map(function (e) { return e.currentProject; });
    };
    Company.prototype.getEmployeesNames = function () {
        return this.employees.map(function (e) { return e.name; });
    };
    return Company;
}());
export { Company };
