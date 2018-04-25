import {
    Game
} from './game.js';

document.addEventListener("DOMContentLoaded", () => {

    const game = new Game();
    game.showFurry();
    game.showCoin();
    game.startGame();

    document.addEventListener('keydown', (event) => game.turnFurry(event));

});
