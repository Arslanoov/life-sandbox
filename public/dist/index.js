(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Rectangle_1 = __webpack_require__(/*! ./geometry/rectangle/Rectangle */ \"./src/geometry/rectangle/Rectangle.ts\");\r\nconst Food_1 = __webpack_require__(/*! ./entity/food/Food */ \"./src/entity/food/Food.ts\");\r\nlet state = {\r\n    updateTime: 1,\r\n    canvas: {\r\n        id: 'canvas',\r\n        height: '750',\r\n        width: '500',\r\n        food: {\r\n            updateTime: 1000\r\n        },\r\n        data: {\r\n            food: [\r\n                {\r\n                    startX: 200,\r\n                    startY: 400,\r\n                    width: 5,\r\n                    height: 5,\r\n                    satiety: 5\r\n                }\r\n            ],\r\n            rectangles: [\r\n                {\r\n                    startX: 2,\r\n                    startY: 4,\r\n                    width: 50,\r\n                    height: 50,\r\n                    speed: 1,\r\n                    behavior: {\r\n                        food: {\r\n                            needFood: true,\r\n                            getFood: true,\r\n                            satiety: 1000\r\n                        }\r\n                    }\r\n                }\r\n            ]\r\n        },\r\n        objects: {\r\n            food: [],\r\n            rectangles: []\r\n        }\r\n    }\r\n};\r\nfunction InitCanvas(state) {\r\n    const canvasState = state.canvas;\r\n    const canvas = document.createElement('canvas');\r\n    canvas.id = canvasState.id;\r\n    canvas.width = canvasState.width;\r\n    canvas.height = canvasState.height;\r\n    for (let i = 0; i < canvasState.data.rectangles.length; i++) {\r\n        canvasState.objects.rectangles.unshift(new Rectangle_1.default(i, canvasState.data.rectangles[i].startX, canvasState.data.rectangles[i].startY, canvasState.data.rectangles[i].width, canvasState.data.rectangles[i].height, canvasState.data.rectangles[i].speed, canvasState.data.rectangles[i].behavior.food.needFood, canvasState.data.rectangles[i].behavior.food.getFood, canvasState.data.rectangles[i].behavior.food.satiety));\r\n    }\r\n    for (let i = 0; i < canvasState.data.food.length; i++) {\r\n        canvasState.objects.food.unshift(new Food_1.default(i, canvasState.data.food[i].startX, canvasState.data.food[i].startY, canvasState.data.food[i].width, canvasState.data.food[i].height, canvasState.data.food[i].satiety));\r\n    }\r\n    return canvas;\r\n}\r\nfunction LifeCycleTick(state) {\r\n    const canvasState = state.canvas;\r\n    for (let i = 0; i < canvasState.objects.rectangles.length; i++) {\r\n        let entity = canvasState.objects.rectangles[i];\r\n        entity.live(canvasState);\r\n    }\r\n}\r\nfunction CreateRandomFood(state) {\r\n    state.canvas.objects.food.unshift(new Food_1.default(state.canvas.objects.food.length, randomInteger(1, 500), randomInteger(1, 500), 5, 5, 250));\r\n}\r\nfunction RedrawCanvas(state) {\r\n    const canvasState = state.canvas;\r\n    const canvas = document.getElementById(canvasState.id);\r\n    const context = canvas.getContext('2d');\r\n    context.clearRect(0, 0, canvasState.width, canvasState.height);\r\n    for (let i = 0; i < canvasState.objects.rectangles.length; i++) {\r\n        state.canvas.objects.rectangles[i].draw(context);\r\n    }\r\n    for (let i = 0; i < canvasState.objects.food.length; i++) {\r\n        state.canvas.objects.food[i].draw(context);\r\n    }\r\n}\r\nfunction Render(state) {\r\n    document.getElementById('root').append(InitCanvas(state));\r\n    window.setInterval(function () {\r\n        CreateRandomFood(state);\r\n    }, state.canvas.food.updateTime);\r\n    window.setInterval(function () {\r\n        LifeCycleTick(state);\r\n        RedrawCanvas(state);\r\n        document.getElementById('population').innerText = 'Population:' + state.canvas.objects.rectangles.length;\r\n    }, state.updateTime);\r\n}\r\n////////////////////////////////\r\nRender(state);\r\n///////////////////////\r\nfunction randomInteger(min, max) {\r\n    let rand = min + Math.random() * (max + 1 - min);\r\n    return Math.floor(rand);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/entity/food/Food.ts":
/*!*********************************!*\
  !*** ./src/entity/food/Food.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Food {\r\n    constructor(id, startX, startY, width, height, satiety) {\r\n        this.id = id;\r\n        this.startX = startX;\r\n        this.startY = startY;\r\n        this.width = width;\r\n        this.height = height;\r\n        this.satiety = satiety;\r\n    }\r\n    draw(context) {\r\n        context.strokeRect(this.startX, this.startY, this.width, this.height);\r\n    }\r\n}\r\nexports.default = Food;\r\n\n\n//# sourceURL=webpack:///./src/entity/food/Food.ts?");

/***/ }),

/***/ "./src/geometry/rectangle/Rectangle.ts":
/*!*********************************************!*\
  !*** ./src/geometry/rectangle/Rectangle.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Rectangle {\r\n    constructor(id, startX, startY, width, height, speed, needFood, getFood, satiety) {\r\n        this.foodEaten = 0;\r\n        this.id = id;\r\n        this.startX = startX;\r\n        this.startY = startY;\r\n        this.width = width;\r\n        this.height = height;\r\n        this.speed = speed;\r\n        this.needFood = needFood;\r\n        this.getFood = getFood;\r\n        this.satiety = satiety;\r\n    }\r\n    draw(context) {\r\n        context.strokeRect(this.startX, this.startY, this.width, this.height);\r\n    }\r\n    moveUp() {\r\n        this.startY -= this.speed;\r\n    }\r\n    moveDown() {\r\n        this.startY += this.speed;\r\n    }\r\n    moveLeft() {\r\n        this.startX -= this.speed;\r\n    }\r\n    moveRight() {\r\n        this.startX += this.speed;\r\n    }\r\n    feed(satiety) {\r\n        this.satiety += satiety;\r\n    }\r\n    live(state) {\r\n        this.starve(state);\r\n        this.huntFood(state);\r\n    }\r\n    starve(state) {\r\n        if (this.needFood) {\r\n            this.satiety -= 1;\r\n            if (this.satiety === 0) {\r\n                this.die(state);\r\n            }\r\n        }\r\n    }\r\n    huntFood(state) {\r\n        if (this.getFood && this.hasFoodNear(state)) {\r\n            const foodInfo = this.findNearestFood(state);\r\n            const food = state.objects.food[foodInfo.index];\r\n            if (foodInfo.length === 0) {\r\n                state.objects.food.splice(foodInfo.index, 1);\r\n                this.eat(food);\r\n                if (this.foodEaten % 2 === 0) {\r\n                    this.clone(state);\r\n                }\r\n            }\r\n            else {\r\n                this.goToFood(state, food);\r\n            }\r\n        }\r\n    }\r\n    goToFood(state, food) {\r\n        if (this.startX < food.startX) {\r\n            this.moveRight();\r\n        }\r\n        else if (this.startY < food.startY) {\r\n            this.moveDown();\r\n        }\r\n        else if (this.startX > food.startX) {\r\n            this.moveLeft();\r\n        }\r\n        else if (this.startY > food.startY) {\r\n            this.moveUp();\r\n        }\r\n    }\r\n    eat(food) {\r\n        this.satiety += food.satiety;\r\n        this.foodEaten += 1;\r\n    }\r\n    clone(state) {\r\n        state.objects.rectangles.unshift(new Rectangle(state.objects.rectangles.length, this.startX - 50, this.startY - 50, this.width, this.height, this.speed, this.needFood, this.getFood, 200));\r\n    }\r\n    hasFoodNear(state) {\r\n        return state.objects.food.length > 0;\r\n    }\r\n    findNearestFood(state) {\r\n        let nearestLength = (Math.abs(this.startX - state.objects.food[0].startX)) +\r\n            Math.abs(this.startY - state.objects.food[0].startY);\r\n        let index = 0;\r\n        for (let i = 1; i < state.objects.food.length; i++) {\r\n            if (((Math.abs(this.startX - state.objects.food[i].startX)) +\r\n                Math.abs(this.startY - state.objects.food[i].startY)\r\n                < nearestLength)) {\r\n                nearestLength = (Math.abs(this.startX - state.objects.food[i].startX)) +\r\n                    Math.abs(this.startY - state.objects.food[i].startY);\r\n                index = i;\r\n            }\r\n        }\r\n        return {\r\n            length: nearestLength,\r\n            index: index\r\n        };\r\n    }\r\n    die(state) {\r\n        state.objects.rectangles.splice(this.id, 1);\r\n    }\r\n}\r\nexports.default = Rectangle;\r\n\n\n//# sourceURL=webpack:///./src/geometry/rectangle/Rectangle.ts?");

/***/ })

/******/ })));