import Rectangle from "./geometry/rectangle/Rectangle";
import RectangleInterface from "./geometry/rectangle/RectangleInterface";
import Food from "./entity/food/Food";

let state: {
    updateTime: number,
    canvas: {
        id: string,
        height: string,
        width: string,
        data: {
            food: object[],
            rectangles: object[]
        },
        objects: {
            food: Food[],
            rectangles: RectangleInterface[]
        }
    }
} = {
    updateTime: 50,
    canvas: {
        id: 'canvas',
        height: '750',
        width: '500',
        data: {
            food: [
                {
                    startX: 200,
                    startY: 400,
                    width: 20,
                    height: 20,
                    satiety: 5
                }
            ],
            rectangles: [
                {
                    startX: 2,
                    startY: 4,
                    width: 50,
                    height: 50,
                    speed: 1,
                    behavior: {
                        food: {
                            needFood: true,
                            getFood: true,
                            satiety: 2000
                        }
                    }
                }
            ]
        },
        objects: {
            food: [],
            rectangles: []
        }
    }
};

function InitCanvas(state: any): HTMLElement {
    const canvasState = state.canvas;
    const canvas: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement;

    canvas.id = canvasState.id;
    canvas.width = canvasState.width;
    canvas.height = canvasState.height;

    for (let i = 0; i < canvasState.data.rectangles.length; i++) {
        canvasState.objects.rectangles.unshift(new Rectangle(
            i,
            canvasState.data.rectangles[i].startX,
            canvasState.data.rectangles[i].startY,
            canvasState.data.rectangles[i].width,
            canvasState.data.rectangles[i].height,
            canvasState.data.rectangles[i].speed,
            canvasState.data.rectangles[i].behavior.food.needFood,
            canvasState.data.rectangles[i].behavior.food.getFood,
            canvasState.data.rectangles[i].behavior.food.satiety
        ));
    }

    for (let i = 0; i < canvasState.data.food.length; i++) {
        canvasState.objects.food.unshift(new Food(
            i,
            canvasState.data.food[i].startX,
            canvasState.data.food[i].startY,
            canvasState.data.food[i].width,
            canvasState.data.food[i].height,
            canvasState.data.food[i].satiety
        ));
    }

    return canvas;
}

function LifeCycleTick(state: any): void {
    const canvasState = state.canvas;

    for (let i = 0; i < canvasState.objects.rectangles.length; i++) {
        let entity = canvasState.objects.rectangles[i];
        entity.live(canvasState);
    }
}

function RedrawCanvas(state: any): void {
    const canvasState = state.canvas;
    const canvas: HTMLCanvasElement = document.getElementById(canvasState.id) as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvasState.width, canvasState.height);

    for (let i = 0; i < canvasState.objects.rectangles.length; i++) {
        state.canvas.objects.rectangles[i].draw(context);
    }

    for (let i = 0; i < canvasState.objects.food.length; i++) {
        state.canvas.objects.food[i].draw(context);
    }
}

function Render(state: any): void {
    document.getElementById('root').append(InitCanvas(state));
    window.setInterval(function (): void {
        LifeCycleTick(state);
        RedrawCanvas(state);
    }, state.updateTime);
}

////////////////////////////////

Render(state);

///////////////////////
