!function(t,e){for(var n in e)t[n]=e[n]}(this,function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(1);!function(t){document.getElementById("root").append(function(t){const e=t.canvas,n=document.createElement("canvas");n.id=e.id,n.width=e.width,n.height=e.height;for(let t=0;t<e.data.rectangles.length;t++)e.objects.rectangles.unshift(new r.default(e.data.rectangles[t].startX,e.data.rectangles[t].startY,e.data.rectangles[t].width,e.data.rectangles[t].height));return n}(t)),window.setInterval((function(){!function(t){t.canvas,t.canvas.objects.rectangles[0].moveRight(10)}(t),function(t){const e=t.canvas,n=document.getElementById(e.id).getContext("2d");n.clearRect(0,0,e.width,e.height);for(let r=0;r<e.objects.rectangles.length;r++)t.canvas.objects.rectangles[r].draw(n)}(t)}),t.updateTime)}({updateTime:1e3,canvas:{id:"canvas",height:"750",width:"500",data:{rectangles:[{startX:2,startY:4,width:50,height:100}]},objects:{rectangles:[]}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t,e,n,r){this.startX=t,this.startY=e,this.width=n,this.height=r}draw(t){t.strokeRect(this.startX,this.startY,this.width,this.height)}moveUp(t){this.startY-=t}moveDown(t){this.startY+=t}moveLeft(t){this.startX-=t}moveRight(t){this.startX+=t}}}]));