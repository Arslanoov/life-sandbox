import RectangleInterface from "./RectangleInterface";
import Food from "../../entity/food/Food";

export default class Rectangle implements RectangleInterface {
    id: number;
    private startX: number;
    private startY: number;
    speed: number;
    width: number;
    height: number;
    needFood: boolean;
    getFood: boolean;
    satiety: number;

    constructor(
        id: number,
        startX: number,
        startY: number,
        width: number,
        height: number,
        speed: number,
        needFood: boolean,
        getFood: boolean,
        satiety: number
    ) {
        this.id = id;
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.needFood = needFood;
        this.getFood = getFood;
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

    moveUp(): void {
        this.startY -= this.speed;
    }

    moveDown(): void {
        this.startY += this.speed;
    }

    moveLeft(): void {
        this.startX -= this.speed;
    }

    moveRight(): void {
        this.startX += this.speed;
    }

    feed(satiety: number) {
        this.satiety += satiety;
    }

    live(state: object) {
        this.starve(state);
        this.huntFood(state);
    }

    starve(state: object): void {
        if (this.needFood) {
            this.satiety -= 1;
            if (this.satiety === 0) {
                this.die(state);
            }
        }
    }

    huntFood(state): void {
        if (this.getFood && this.hasFoodNear(state)) {
            if (this.hasFoodNear(state)) {
                const foodInfo = this.findNearestFood(state);
                const food = state.objects.food[foodInfo.index];

                if (foodInfo.length === 0) {
                    food.eat(state);
                } else {
                    this.goToFood(state, food);
                }
            }
        }
    }

    goToFood(state, food: Food): void {
        if (this.startX < food.startX) {
            this.moveRight();
        } else if (this.startY < food.startY) {
            this.moveDown();
        } else if (this.startX > food.startX) {
            this.moveLeft();
        } else if (this.startY > food.startX) {
            this.moveUp();
        }
    }

    eat(food: Food) {
        this.satiety += food.satiety;
    }

    hasFoodNear(state): boolean {
        return state.objects.food.length > 0;
    }

    findNearestFood(state) {
        let nearestLength = Math.abs(state.objects.food[0].startX - this.startX) +
            Math.abs(state.objects.food[0].startY - this.startY);
        let index = 0;

        for (let i = 1; i < state.objects.food.length; i++) {
            if (
                Math.abs(state.objects.food[i].startX - this.startX) +
                Math.abs(state.objects.food[i].startY - this.startY)
                < nearestLength
            ) {
                nearestLength = Math.abs(state.objects.food[i].startX - this.startX) +
                    Math.abs(state.objects.food[i].startY - this.startY);
                index = i;
            }
        }

        return {
            length: nearestLength,
            index: index
        };
    }

    die(state): void {
        state.objects.rectangles.splice(this.id, 1);
    }
}
