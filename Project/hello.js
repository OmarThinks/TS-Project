var Box = /** @class */ (function () {
    function Box() {
        this.contents = "";
    }
    Box.prototype.set = function (value) {
        this.contents = value;
        return this;
    };
    return Box;
}());
