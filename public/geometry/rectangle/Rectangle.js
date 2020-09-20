"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(startX, startY, width, height) {
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.height = height;
    }
    draw(context) {
        context.strokeRect(this.startX, this.startY, this.width, this.height);
    }
    moveUp(coordinate) {
        this.startY -= coordinate;
    }
    moveDown(coordinate) {
        this.startY += coordinate;
    }
    moveLeft(coordinate) {
        this.startX -= coordinate;
    }
    moveRight(coordinate) {
        this.startX += coordinate;
    }
}
exports.default = Rectangle;
