/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

document.addEventListener("DOMContentLoaded", function () {

    var game = new _game.Game();
    game.showFurry();
    game.showCoin();
    game.startGame();

    document.addEventListener('keydown', function (event) {
        return game.turnFurry(event);
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = Game;

var _furry = __webpack_require__(2);

var _coin = __webpack_require__(3);

function Game() {
    var _this = this;

    this.board = document.querySelectorAll('#board div'), this.furry = new _furry.Furry(), this.coin = new _coin.Coin(), this.score = 0;
    this.index = function (x, y) {
        return x + y * 10;
    };

    this.showFurry = function () {
        _this.hideVisibleFurry();
        _this.board[_this.index(_this.furry.x, _this.furry.y)].classList.add('furry');
    };
    this.hideVisibleFurry = function () {
        var toRemove = document.querySelector('.furry');
        if (toRemove) {
            toRemove.classList.remove('furry');
        }
    };
    this.showCoin = function () {
        _this.board[_this.index(_this.coin.x, _this.coin.y)].classList.add('coin');
    };
    this.moveFurry = function () {
        if (_this.furry.direction === "right") {
            _this.furry.x = _this.furry.x + 1;
        } else if (_this.furry.direction === "left") {
            _this.furry.x = _this.furry.x - 1;
        } else if (_this.furry.direction === "up") {
            _this.furry.y = _this.furry.y - 1;
        } else if (_this.furry.direction === "down") {
            _this.furry.y = _this.furry.y + 1;
        }
        _this.gameOver();
        if (_this.gameOver() != true) {
            _this.showFurry();
            _this.checkCoinCollision();
        }
    };
    this.turnFurry = function (event) {
        if (event.which === 37) {
            return _this.furry.direction = 'left';
        } else if (event.which === 39) {
            return _this.furry.direction = 'right';
        } else if (event.which === 38) {
            return _this.furry.direction = 'up';
        } else if (event.which === 40) {
            return _this.furry.direction = 'down';
        }
    };
    this.checkCoinCollision = function () {
        if (_this.furry.x === _this.coin.x && _this.furry.y === _this.coin.y) {
            var coin = document.querySelector('.coin');
            coin.classList.remove('coin');
            _this.score = _this.score + 1;
            var score = document.querySelector('#score strong');
            score.innerText = _this.score;
            _this.coin = new _coin.Coin();
            _this.showCoin();
        }
    };
    this.gameOver = function () {
        if (_this.furry.x < 0 || _this.furry.x > 9 || _this.furry.y < 0 || _this.furry.y > 9) {
            clearInterval(_this.idSetInterval);
            _this.hideVisibleFurry();
            var over = document.querySelector('#over');
            over.classList.remove('invisible');
            var score = document.querySelector('#over strong');
            score.innerText = _this.score;
            return true;
        }
    };
    this.startGame = function () {
        _this.idSetInterval = setInterval(function () {
            _this.moveFurry();
        }, 250);
    };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Furry = Furry;
function Furry() {
    this.x = 0, this.y = 0, this.direction = "right";
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Coin = Coin;
function Coin() {
    this.x = Math.floor(Math.random() * 10), this.y = Math.floor(Math.random() * 10);
}

/***/ })
/******/ ]);