import { Employee } from "./employee.js";
var CompanyLocationArray = /** @class */ (function () {
    function CompanyLocationArray() {
        this._employees = [];
    }
    CompanyLocationArray.prototype.addPerson = function (employee) {
        this._employees.push(employee);
    };
    CompanyLocationArray.prototype.getCount = function () {
        return this._employees.length;
    };
    CompanyLocationArray.prototype.getPerson = function (index) {
        return this._employees[index];
    };
    return CompanyLocationArray;
}());
var CompanyLocationLocalStorage = /** @class */ (function () {
    function CompanyLocationLocalStorage() {
        this.LOCAL_STORAGE_KEY = "MY_EMPLOYEES_LOCAL_STORAGE_KEY";
    }
    CompanyLocationLocalStorage.prototype.getCount = function () {
        return this.getLocalStorage().length;
    };
    CompanyLocationLocalStorage.prototype.getPerson = function (index) {
        var employees = this.getLocalStorage();
        return (employees[index]) ? Employee.fromJSON(employees[index]) : undefined;
    };
    CompanyLocationLocalStorage.prototype.addPerson = function (employee) {
        var employees = this.getLocalStorage();
        employees.push(employee.toJSON());
        this.saveLocalStorage(employees);
    };
    CompanyLocationLocalStorage.prototype.getLocalStorage = function () {
        var s = localStorage.getItem(this.LOCAL_STORAGE_KEY);
        return s ? JSON.parse(s) : [];
    };
    CompanyLocationLocalStorage.prototype.saveLocalStorage = function (employees) {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(employees));
    };
    return CompanyLocationLocalStorage;
}());
export { CompanyLocationArray, CompanyLocationLocalStorage };
