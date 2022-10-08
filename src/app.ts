import { initialState, StateInterface } from "./const/state";
import LivingCell from "./entity/LivingCell";
import Food from "./entity/Food";
import animate from "./utils/animate";

import "./styles/app.scss";

const state: StateInterface = initialState;

function InitCanvas(state: any): HTMLElement {
    const canvasState = state.canvas;
    const canvas: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement;

    canvas.id = canvasState.id;
    canvas.width = canvasState.width;
    canvas.height = canvasState.height;

    for (let i = 0; i < canvasState.data.livingCells.length; i++) {
        canvasState.objects.livingCells.unshift(new LivingCell(
            i,
            canvasState.data.livingCells[i].startX,
            canvasState.data.livingCells[i].startY,
            canvasState.data.livingCells[i].width,
            canvasState.data.livingCells[i].height,
            canvasState.data.livingCells[i].speed,
            canvasState.data.livingCells[i].behavior.food.needFood,
            canvasState.data.livingCells[i].behavior.food.getFood,
            canvasState.data.livingCells[i].behavior.food.satiety
        ));
    }

    for (let i = 0; i < canvasState.data.food.length; i++) {
        canvasState.objects.food.unshift(new Food(
            i,
            canvasState.data.food[i].startX,
            canvasState.data.food[i].startY,
            canvasState.data.food[i].width,
            canvasState.data.food[i].satiety
        ));
    }

    return canvas;
}

function LifeCycleTick(state: any): void {
    const canvasState = state.canvas;

    for (let i = 0; i < canvasState.objects.livingCells.length; i++) {
        let entity = canvasState.objects.livingCells[i];
        entity.live(canvasState, 2);
    }
}

function CreateRandomFood(state: any): void {
    state.canvas.objects.food.unshift(new Food(
        state.canvas.objects.food.length,
        randomInteger(1, 500),
        randomInteger(1, 500),
        20,
        250
    ));
}

function RedrawCanvas(state: any): void {
    const canvasState = state.canvas;
    const canvas: HTMLCanvasElement = document.getElementById(canvasState.id) as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvasState.width, canvasState.height);

    for (let i = 0; i < canvasState.objects.livingCells.length; i++) {
        state.canvas.objects.livingCells[i].draw(context);
    }

    for (let i = 0; i < canvasState.objects.food.length; i++) {
        state.canvas.objects.food[i].draw(context);
    }
}

function Render(state: any) {
    document.getElementById('root').append(InitCanvas(state));

    animate(function () {
        CreateRandomFood(state);
    }, state.canvas.food.updateFps);

    animate(function () {
        LifeCycleTick(state);
        RedrawCanvas(state);
        document.querySelector('.population').innerHTML = 'Population: ' + state.canvas.objects.livingCells.length;
    }, state.updateFps);
}

Render(state);

function randomInteger(min: number, max: number): number {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
