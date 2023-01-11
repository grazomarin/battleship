import { renderBoard, renderStart, hideBoard, renderGameOver } from "./dom";
import Player from "./player";

function initGame() {
  const p1 = new Player("Kamran");
  const AI = new Player("AI", true);
  renderStart(p1, AI);
}

export { initGame };
