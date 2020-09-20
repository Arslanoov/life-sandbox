export default interface RectangleInterface {
    draw(context: CanvasRenderingContext2D): void;
    moveUp(coordinate: number): void;
}
