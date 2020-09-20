"use strict";
exports.__esModule = true;
var Rectangle = (function () {
    function Rectangle(startX, startY, width, height) {
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.draw = function (context) {
        context.strokeRect(this.startX, this.startY, this.width, this.height);
    };
    Rectangle.prototype.moveUp = function (coordinate) {
        this.startY -= coordinate;
    };
    Rectangle.prototype.moveDown = function (coordinate) {
        this.startY += coordinate;
    };
    return Rectangle;
}());
exports["default"] = Rectangle;
//# sourceMappingURL=Rectangle.js.map