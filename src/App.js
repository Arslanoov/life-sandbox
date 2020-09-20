"use strict";
exports.__esModule = true;
var Rectangle_1 = require("./geometry/rectangle/Rectangle");
var state = {
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
    var canvasState = state.canvas;
    var canvas = document.createElement('canvas');
    canvas.id = canvasState.id;
    canvas.width = canvasState.width;
    canvas.height = canvasState.height;
    for (var i = 0; i < canvasState.data.rectangles.length; i++) {
        canvasState.objects.rectangles.unshift(new Rectangle_1["default"](canvasState.data.rectangles[i].startX, canvasState.data.rectangles[i].startY, canvasState.data.rectangles[i].width, canvasState.data.rectangles[i].height));
    }
    return canvas;
}
function LifeCycleTick(state) {
    var canvasState = state.canvas;
    state.canvas.objects.rectangles[0].moveDown(10);
}
function RedrawCanvas(state) {
    var canvasState = state.canvas;
    var canvas = document.getElementById(canvasState.id);
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvasState.width, canvasState.height);
    for (var i = 0; i < canvasState.objects.rectangles.length; i++) {
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
Render(state);
//# sourceMappingURL=app.js.map