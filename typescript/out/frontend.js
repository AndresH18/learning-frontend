var Frontend = /** @class */ (function () {
    function Frontend(_name, _currentProject) {
        this._name = _name;
        this._currentProject = _currentProject;
    }
    Object.defineProperty(Frontend.prototype, "currentProject", {
        get: function () {
            return this._currentProject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Frontend.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Frontend;
}());
export { Frontend };
