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

function dragEnd(e) {
  e.preventDefault();
  hideReservedSpaces();
}

function drop(e) {
  hideReservedSpaces();

  const id = e.dataTransfer.getData("text/plain");
  if (!document.getElementById(id)) return;
  const parent = document.getElementById(id).parentNode;
  const isVertical = parent.classList.contains("vertical");
  const [cellNum, length] = id.split("-");
  const [board, y, x] = e.target.id.split("-");
  const player = document.querySelector(".board-1").player;

  if (canBePlaced(player, +length)) {
    if (isVertical) {
      if (
        player.gameboard.placeShip([+y - cellNum, +x], +length, true) !== false
      ) {
        changeNumberOfShipsLeft(+length, parent);
      }
    } else {
      if (
        player.gameboard.placeShip([+y, +x - cellNum], +length, false) !== false
      ) {
        changeNumberOfShipsLeft(+length, parent);
      }
    }
  }

  renderShips(player);
}

function canBePlaced(player, length) {
  return player.gameboard.numberOfSpecificShips(length) < 2 ? true : false;
}

function changeNumberOfShipsLeft(length, ship) {
  const numberLeft = document.getElementById(`ship${length}`);
  const text = Array.from(numberLeft.textContent);
  numberLeft.textContent = `x${text[1] - 1}`;
  if (text[1] - 1 === 0) blockRotation(ship);
}

function blockRotation(ship) {
  ship.classList.remove("vertical");
  ship.addEventListener("click", () => ship.classList.remove("vertical"));
}

export { dragStart, assignCellToDrag, dragOver, drop, dragEnd };
