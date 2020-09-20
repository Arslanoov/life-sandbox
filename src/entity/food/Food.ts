export default class Food {
    id: number;
    startX: number;
    startY: number;
    width: number;
    height: number;
    satiety: number;

    constructor(
        id: number,
        startX: number,
        startY: number,
        width: number,
        height: number,
        satiety: number
    ) {
        this.id = id;
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.height = height;
        this.satiety = satiety;
    }

    public draw(context: CanvasRenderingContext2D): void {
        context.strokeRect(
            this.startX,
            this.startY,
            this.width,
            this.height
        );
    }
}
