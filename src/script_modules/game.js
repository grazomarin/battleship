import { renderBoards } from "./dom";
import Player from "./player";

function initGame() {
  const p1 = new Player();
  const p2 = new Player(true);
  p1.gameboard.placeShip([0, 2], 2);
  p1.gameboard.placeShip([3, 3], 4);
  p1.gameboard.placeShip([5, 6], 3, true);
  p2.gameboard.placeShip([5, 6], 3, true);
  renderBoards(p1, p2);
}
export { initGame };
