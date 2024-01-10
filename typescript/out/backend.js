var Backend = /** @class */ (function () {
    function Backend(_name, _currentProject) {
        this._name = _name;
        this._currentProject = _currentProject;
    }
    Object.defineProperty(Backend.prototype, "currentProject", {
        get: function () {
            return this._currentProject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Backend.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Backend;
}());
export { Backend };
