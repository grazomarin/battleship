import { renderBoards } from "./dom";
import Player from "./player";

function initGame() {
  const p1 = new Player();
  const AI = new Player(true);
  p1.gameboard.randomFleet();
  AI.gameboard.placeShip([5, 6], 3, true);
  AI.gameboard.placeShip([3, 0], 5, false);
  renderBoards(p1, AI);
}

export { initGame };
