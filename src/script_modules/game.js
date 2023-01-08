import { renderBoards, renderShips, renderStartScreen, startGame } from "./dom";
import Player from "./player";

function initGame() {
  renderBoards();
  renderStartScreen();
  //   startGame();
}

export { initGame };
