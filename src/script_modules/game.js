import { renderBoards } from "./dom";
import Player from "./player";

function initGame() {
  const p1 = new Player();
  const AI = new Player(true);
  p1.gameboard.randomFleet();
  AI.gameboard.randomFleet();
  renderBoards(p1, AI);
}

export { initGame };
