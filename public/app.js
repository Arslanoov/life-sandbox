"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./geometry/rectangle/Rectangle");
let state = {
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
function InitCanvas(state) {
    const canvasState = state.canvas;
    const canvas = document.createElement('canvas');
    canvas.id = canvasState.id;
    canvas.width = canvasState.width;
    canvas.height = canvasState.height;
    for (let i = 0; i < canvasState.data.rectangles.length; i++) {
        canvasState.objects.rectangles.unshift(new Rectangle_1.default(canvasState.data.rectangles[i].startX, canvasState.data.rectangles[i].startY, canvasState.data.rectangles[i].width, canvasState.data.rectangles[i].height));
    }
    return canvas;
}
function LifeCycleTick(state) {
    const canvasState = state.canvas;
    state.canvas.objects.rectangles[0].moveRight(10);
}
function RedrawCanvas(state) {
    const canvasState = state.canvas;
    const canvas = document.getElementById(canvasState.id);
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvasState.width, canvasState.height);
    for (let i = 0; i < canvasState.objects.rectangles.length; i++) {
        state.canvas.objects.rectangles[i].draw(context);
    }
}
function Render(state) {
    document.getElementById('root').append(InitCanvas(state));
    window.setInterval(function () {
        LifeCycleTick(state);
        RedrawCanvas(state);
    }, state.updateTime);
}
////////////////////////////////
Render(state);
///////////////////////
