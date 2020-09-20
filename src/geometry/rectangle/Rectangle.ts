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
    foodEaten: number = 0;

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
            const foodInfo = this.findNearestFood(state);
            const food: Food = state.objects.food[foodInfo.index];

            if (foodInfo.length === 0) {
                state.objects.food.splice(foodInfo.index, 1);
                this.eat(food);
                if (this.foodEaten % 2 === 0) {
                    this.clone(state);
                }
            } else {
                this.goToFood(state, food);
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
        } else if (this.startY > food.startY) {
            this.moveUp();
        }
    }

    eat(food: Food) {
        this.satiety += food.satiety;
        this.foodEaten += 1;
    }
    
    clone(state) {
        state.objects.rectangles.unshift(new Rectangle(
            state.objects.rectangles.length,
            this.startX - 50,
            this.startY - 50,
            this.width,
            this.height,
            this.speed,
            this.needFood,
            this.getFood,
            200
        ));
    }

    hasFoodNear(state): boolean {
        return state.objects.food.length > 0;
    }

    findNearestFood(state) {
        let nearestLength = (Math.abs(this.startX - state.objects.food[0].startX)) +
            Math.abs(this.startY - state.objects.food[0].startY);
        let index = 0;

        for (let i = 1; i < state.objects.food.length; i++) {
            if (
                ((Math.abs(this.startX - state.objects.food[i].startX)) +
                Math.abs(this.startY - state.objects.food[i].startY)
                < nearestLength)
            ) {
                nearestLength = (Math.abs(this.startX - state.objects.food[i].startX)) +
                    Math.abs(this.startY - state.objects.food[i].startY);
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
