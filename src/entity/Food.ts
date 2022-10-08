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
        satiety: number
    ) {
        this.id = id;
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.satiety = satiety;
    }

    public draw(context: CanvasRenderingContext2D): void {
        context.fillText(
            `🍖`,
            this.startX,
            this.startY,
            this.width
        );

        context.font = "20px serif";
    }
}
