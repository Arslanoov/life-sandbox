import RectangleInterface from "./RectangleInterface";

export default class Rectangle implements RectangleInterface {
    startX: number;
    private startY: number;
    width: number;
    height: number;

    constructor(startX, startY, width, height) {
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.height = height;
    }

    public draw(context: CanvasRenderingContext2D): void {
        context.strokeRect(
            this.startX,
            this.startY,
            this.width,
            this.height
        );
    }

    moveUp(coordinate: number): void {
        this.startY -= coordinate;
    }

    moveDown(coordinate: number): void {
        this.startY += coordinate;
    }
}
