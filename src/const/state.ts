import Food from "../entity/Food";
import { RectangleInterface } from "../entity/LivingCell";

const vw = document.documentElement.clientWidth;
const vh = document.documentElement.clientHeight;

export interface StateInterface {
    updateFps: number,
    canvas: {
        id: string,
        height: number,
        width: number,
        food: {
            updateFps: number
        },
        data: {
            food: object[],
            livingCells: object[]
        },
        objects: {
            food: Food[],
            livingCells: RectangleInterface[]
        }
    }
}

export const initialState = {
    updateFps: 1000,
    canvas: {
        id: 'canvas',
        height: Math.min(500, vh * 0.95),
        width: Math.min(500, vw * 0.95),
        food: {
            updateFps: 1
        },
        data: {
            food: [
                {
                    startX: 200,
                    startY: 400,
                    width: 50,
                    height: 50,
                    satiety: 5
                }
            ],
            livingCells: [
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
                            satiety: 1000
                        }
                    }
                }
            ]
        },
        objects: {
            food: [],
            livingCells: []
        }
    }
};
