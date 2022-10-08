import Food from "./Food";

export interface RectangleInterface {
    draw(context: CanvasRenderingContext2D): void;
    moveUp(coordinate: number): void;
}

export default class LivingCell implements RectangleInterface {
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
        const image = new Image();
        image.src = "img/bacteria.svg";
        context.drawImage(
            image,
            this.startX,
            this.startY,
            this.width,
            this.height
        );
    }

    moveUp(ticks: number = 1): void {
        this.startY -= this.speed * ticks;
    }

    moveDown(ticks: number = 1): void {
        this.startY += this.speed * ticks;
    }

    moveLeft(ticks: number = 1): void {
        this.startX -= this.speed * ticks;
    }

    moveRight(ticks: number = 1): void {
        this.startX += this.speed * ticks;
    }

    feed(satiety: number) {
        this.satiety += satiety;
    }

    live(state: object, ticks: number) {
        this.starve(state, ticks);
        this.huntFood(state, ticks);
    }

    starve(state: object, ticks: number): void {
        if (this.needFood) {
            this.satiety = Math.max(this.satiety - ticks, 0);
            if (this.satiety === 0) {
                this.die(state);
            }
        }
    }

    huntFood(state, ticks: number): void {
        if (this.getFood && this.hasFoodNear(state)) {
            const foodInfo = this.findNearestFood(state);
            const food: Food = state.objects.food[foodInfo.index];

            if (foodInfo.length <= ticks) {
                state.objects.food.splice(foodInfo.index, 1);
                this.eat(food);
                if (this.foodEaten % 2 === 0) {
                    this.clone(state);
                }
            } else {
                this.goToFood(state, food, ticks);
            }
        }
    }

    goToFood(state, food: Food, ticks: number): void {
        if (this.startX < food.startX) {
            this.moveRight(ticks);
        }

        if (this.startY < food.startY) {
            this.moveDown(ticks);
        }

        if (this.startX > food.startX) {
            this.moveLeft(ticks);
        }

        if (this.startY > food.startY) {
            this.moveUp(ticks);
        }
    }

    eat(food: Food) {
        this.satiety += food.satiety;
        this.foodEaten += 1;
    }
    
    clone(state) {
        state.objects.livingCells.unshift(new LivingCell(
            state.objects.livingCells.length,
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
        let nearestLength = Math.max(
            (
                Math.abs(this.startX - state.objects.food[0].startX) +
                Math.abs(this.startY - state.objects.food[0].startY)
            ),
            0
        );
        let index = 0;

        for (let i = 1; i < state.objects.food.length; i++) {
            if (
                Math.max(
                    (
                        Math.abs(this.startX - state.objects.food[i].startX) +
                        Math.abs(this.startY - state.objects.food[i].startY)
                    ),
                    0
                )
                < nearestLength
            ) {
                nearestLength = Math.max(
                    (
                        Math.abs(this.startX - state.objects.food[i].startX) +
                        Math.abs(this.startY - state.objects.food[i].startY)
                    ),
                    0
                );
                index = i;
            }
        }

        return {
            length: nearestLength,
            index: index
        };
    }

    die(state): void {
        state.objects.livingCells.splice(this.id, 1);
    }
}
