'use strict';

var _$ = require('./$.js');

var _$2 = _interopRequireDefault(_$);

var _render = require('./render.js');

var _render2 = _interopRequireDefault(_render);

var _action = require('./action.js');

var _actionList = require('./actionList.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainCanvas = (0, _$2.default)('canvas.main');
mainCanvas.width = 320;
mainCanvas.height = 240;

var mainContext = mainCanvas.getContext('2d');
var entityMusketeer = (0, _action.movable)(5, 0, (0, _action.entity)(24, 24, mainContext));
var bottomMusketeer = (0, _action.atBottom)(mainCanvas, entityMusketeer);
var aramis = (0, _action.musketeer)('Aramis', 0, bottomMusketeer, entityMusketeer);

var athos = (0, _action.musketeer)('Athos', 24, bottomMusketeer, entityMusketeer);

var porthos = (0, _action.musketeer)('Porthos', 48, bottomMusketeer, entityMusketeer);

var threeMusketeers = [aramis, athos, porthos];
(0, _actionList.renderList)(threeMusketeers);

function animationFwd(startPosition, stepCount, entityList) {
         while (startPosition <= mainCanvas.width / stepCount) {
                  startPosition = startPosition + 1;
                  setTimeout(function () {
                           entityList = (0, _actionList.moveList)(entityList);
                  }, stepCount * startPosition);
         }
}

animationFwd(0, 25, threeMusketeers);