import { renderBoards, renderShips, renderStartScreen, startGame } from "./dom";
import Player from "./player";

function initGame() {
  renderStartScreen();
  renderBoards();
}

export { initGame };
