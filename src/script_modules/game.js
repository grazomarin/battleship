import {
  renderBoard,
  renderButtons,
  addButtonListeners,
  hideBoard,
} from "./dom";
import Player from "./player";

function initGame() {
  const p1 = new Player("Kamran");
  const AI = new Player("AI", true);
  renderBoard(p1);
  renderBoard(AI);
  hideBoard(AI);
  renderButtons();
  addButtonListeners(p1, AI);
}

export { initGame };
