'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clear = clear;
exports.default = render;
function clear(entity) {
    var x = entity.x;
    var w = entity.w;
    var y = entity.y;
    var h = entity.h;
    var ctx = entity.ctx;

    ctx.clearRect(x - 1, y - 1, w + 2, h + 2);
}

function render(entity) {
    var x = entity.x;
    var w = entity.w;
    var y = entity.y;
    var h = entity.h;
    var ctx = entity.ctx;

    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    return entity;
}