import { renderShips, showReservedSpaces, hideReservedSpaces } from "./dom";

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.cell);
  showReservedSpaces();
}

function assignCellToDrag(e) {
  e.path[1].cell = e.target.id;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const [cellNum, length] = id.split("-");
  const [board, y, x] = e.target.id.split("-");
  const player = document.querySelector(".board-1").player;

  if (canBePlaced(player, +length)) {
    if (player.gameboard.placeShip([+y, x - cellNum], +length) !== false) {
      changeNumberOfShipsLeft(+length);
    }
  }

  hideReservedSpaces();
  renderShips(player);
}

function canBePlaced(player, length) {
  return player.gameboard.numberOfSpecificShips(length) < 2 ? true : false;
}

function changeNumberOfShipsLeft(length) {
  const numberLeft = document.getElementById(`ship${length}`);
  const text = Array.from(numberLeft.textContent);
  numberLeft.textContent = `x${text[1] - 1}`;
}

export { dragStart, assignCellToDrag, dragOver, drop };
