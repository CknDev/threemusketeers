"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.entity = entity;
exports.movable = movable;
exports.musketeer = musketeer;
exports.atBottom = atBottom;
exports.updatePosition = updatePosition;
function entity(w, h, ctx) {
    return Object.assign({}, { w: w, h: h, ctx: ctx });
}
function movable(xVel, yVel, state) {
    return Object.assign({}, state, { velocity: { x: xVel,
            y: yVel } });
}
function musketeer(name, x, y, state) {
    return Object.assign({}, state, { name: name, x: x, y: y });
}

function atBottom(canvas, entity) {
    return canvas.height - entity.h;
}

function updatePosition(state) {
    var velocity = state.velocity;

    return Object.assign({}, state, { x: state.x + velocity.x,
        y: state.y + velocity.y });
}