"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderList = renderList;
exports.moveList = moveList;
function renderList(entityList) {
    entityList.forEach(render);
}
function moveList(entityList) {
    var movedEntityList = entityList.map(updatePosition);
    entityList.forEach(clear);
    renderList(movedEntityList);
    return movedEntityList;
}