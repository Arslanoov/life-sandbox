import Rectangle from "./geometry/rectangle/Rectangle";
import RectangleInterface from "./geometry/rectangle/RectangleInterface";

let state: {
    updateTime: number,
    canvas: {
        id: string,
        height: string,
        width: string,
        data: {
            rectangles: object[]
        },
        objects: {
            rectangles: RectangleInterface[]
        }
    }
} = {
    updateTime: 1000,
    canvas: {
        id: 'canvas',
        height: '750',
        width: '500',
        data: {
            rectangles: [
                {
                    startX: 2,
                    startY: 4,
                    width: 50,
                    height: 100
                }
            ]
        },
        objects: {
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
            canvasState.data.rectangles[i].startX,
            canvasState.data.rectangles[i].startY,
            canvasState.data.rectangles[i].width,
            canvasState.data.rectangles[i].height
        ));
    }

    return canvas;
}

function LifeCycleTick(state: any): void {
    const canvasState = state.canvas;

    state.canvas.objects.rectangles[0].moveDown(10);
}

function RedrawCanvas(state: any): void {
    const canvasState = state.canvas;
    const canvas: HTMLCanvasElement = document.getElementById(canvasState.id) as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvasState.width, canvasState.height);

    for (let i = 0; i < canvasState.objects.rectangles.length; i++) {
        state.canvas.objects.rectangles[i].draw(context);
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
