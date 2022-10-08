"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Food {
    constructor(id, startX, startY, width, height, satiety) {
        this.id = id;
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.height = height;
        this.satiety = satiety;
    }
    draw(context) {
        context.strokeRect(this.startX, this.startY, this.width, this.height);
    }
}
exports.default = Food;
