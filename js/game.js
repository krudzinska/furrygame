import {
    Furry
} from './furry.js';
import {
    Coin
} from './coin.js';

export function Game() {
    this.board = document.querySelectorAll('#board div'),
    this.furry = new Furry(),
    this.coin = new Coin(),
    this.score = 0
    this.index = (x, y) => x + (y * 10)

    this.showFurry = () => {
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    }
    this.hideVisibleFurry = () => {
        const toRemove = document.querySelector('.furry');
        if (toRemove) {
            toRemove.classList.remove('furry');
        }
    }
    this.showCoin = () => {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    }
    this.moveFurry = () => {
        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        }
        this.gameOver();
        if (this.gameOver() != true) {
            this.showFurry();
            this.checkCoinCollision();
        }
    }
    this.turnFurry = (event) => {
        if (event.which === 37) {
            return this.furry.direction = 'left';
        }
        else if (event.which === 39) {
            return this.furry.direction = 'right';
        }
        else if (event.which === 38) {
            return this.furry.direction = 'up';
        }
        else if (event.which === 40) {
            return this.furry.direction = 'down';
        }
    }
    this.checkCoinCollision = () => {
        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
            const coin = document.querySelector('.coin');
            coin.classList.remove('coin');
            this.score = this.score + 1;
            const score = document.querySelector('#score strong');
            score.innerText = this.score;
            this.coin = new Coin();
            this.showCoin();
        }
    }
    this.gameOver = () => {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            const over = document.querySelector('#over')
            over.classList.remove('invisible');
            const score = document.querySelector('#over strong');
            score.innerText = this.score;
            return true;
        }
    }
    this.startGame = () => {
        this.idSetInterval = setInterval(() => {
            this.moveFurry();
        }, 250);
    }
}
