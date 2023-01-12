import { renderShips, showReservedSpaces, hideReservedSpaces } from "./dom";

function dragStart(e) {
  e.dataTransfer.setData("text/plain", [
    e.target.cell,
    e.target.classList.contains("vertical"),
  ]);
  showReservedSpaces();
}

function assignCellToDrag(e) {
  e.path[1].cell = e.target.id;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  let [id, isVertical] = e.dataTransfer.getData("text/plain").split(",");
  const [cellNum, length] = id.split("-");
  const [board, y, x] = e.target.id.split("-");
  const player = document.querySelector(".board-1").player;
  isVertical = isVertical === "false" ? false : true;

  if (canBePlaced(player, +length)) {
    if (isVertical) {
      if (
        player.gameboard.placeShip([+y - cellNum, +x], +length, true) !== false
      ) {
        changeNumberOfShipsLeft(+length);
      }
    } else {
      if (
        player.gameboard.placeShip([+y, +x - cellNum], +length, false) !== false
      ) {
        changeNumberOfShipsLeft(+length);
      }
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
