import logo from "../images/logo.svg";
import {
  assignCellToDrag,
  dragEnter,
  dragOver,
  dragStart,
  drop,
  hideElem,
  shipDrag,
} from "./drag_n_drop";
import { initGame } from "./game";
document.querySelector(".head_logo").src = logo;

function renderBoard(player) {
  const board = document.createElement("div");
  board.classList = player.AI ? "board-2" : "board-1";
  board.player = player;

  for (let i = 0; i < 10; i++) {
    for (let u = 0; u < 10; u++) {
      const cell = document.createElement("div");
      cell.classList = player.AI ? "cell-2" : "cell-1";
      cell.setAttribute("id", `${player.AI ? `2-${i}-${u}` : `1-${i}-${u}`}`);
      board.append(cell);
    }
  }
  return board;
}

function showBoard(board) {
  board.style.display = "grid";
}

function hideBoard(board) {
  board.style.display = "none";
}

function clearBoard(board) {
  for (let z = 0; z < 10; z++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.getElementById(`${board}-${z}-${x}`);
      cell.classList = `cell-${board}`;
    }
  }
}

function renderShips(p1) {
  for (let z = 0; z < 10; z++) {
    for (let x = 0; x < 10; x++) {
      const cell1 = document.getElementById(`1-${z}-${x}`);
      const cell2 = document.getElementById(`2-${z}-${x}`);
      cell2.addEventListener("click", playerAttack);
      if (p1.gameboard.board[z][x].ship) {
        cell1.classList.add("ship_friend");
      }
    }
  }
}

function renderSelection() {
  const cont = document.createElement("div");
  const ship5Cont = document.createElement("div");
  const ship3Cont = document.createElement("div");
  const ship2Cont = document.createElement("div");
  const ship5 = returnDraggableShip(5);
  const ship3 = returnDraggableShip(3);
  const ship2 = returnDraggableShip(2);
  const ship5Quant = document.createElement("h3");
  const ship3Quant = document.createElement("h3");
  const ship2Quant = document.createElement("h3");
  ship5Quant.textContent = "x2";
  ship3Quant.textContent = "x2";
  ship2Quant.textContent = "x2";
  ship5Quant.setAttribute("id", "ship5");
  ship3Quant.setAttribute("id", "ship3");
  ship2Quant.setAttribute("id", "ship2");
  cont.classList.add("selection");
  ship5Cont.classList.add("selection_cont");
  ship3Cont.classList.add("selection_cont");
  ship2Cont.classList.add("selection_cont");

  ship5Cont.append(ship5, ship5Quant);
  ship3Cont.append(ship3, ship3Quant);
  ship2Cont.append(ship2, ship2Quant);
  cont.append(ship5Cont, ship3Cont, ship2Cont);
  document.querySelector(".main").append(cont);
}

function removeSelection() {
  document.querySelector(".selection").remove();
}

function renderStart(player, AI) {
  const board1 = renderBoard(player);
  const board2 = renderBoard(AI);
  const main = document.querySelector(".main");
  const startCont = document.createElement("div");
  const startBtn = document.createElement("div");
  const randomBtn = document.createElement("div");
  const resetBtn = document.createElement("div");
  const buttonCont = document.createElement("div");

  startCont.classList.add("start_cont");
  buttonCont.classList.add("button-cont");
  startBtn.classList.add("button");
  randomBtn.classList.add("button");
  resetBtn.classList.add("button");
  startBtn.textContent = "Start Game";
  randomBtn.textContent = "Random";
  resetBtn.textContent = "Reset Board";
  buttonCont.append(startBtn, resetBtn, randomBtn);
  startCont.append(board1, buttonCont);
  main.append(startCont, board2);
  hideBoard(board2);

  board1.player = player;
  board2.player = AI;

  board1.childNodes.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("drop", drop);
  });

  renderSelection();

  startBtn.addEventListener("click", () => {
    if (player.gameboard.ships.length === 6) {
      main.prepend(board1);
      showBoard(board2);
      startGame(player, AI);
    }
  });

  randomBtn.addEventListener("click", () => {
    player.gameboard.randomFleet();
    clearBoard("1");
    renderShips(player);
  });

  resetBtn.addEventListener("click", () => {
    player.gameboard.clearBoard();
    clearBoard("1");
    removeSelection();
    renderSelection();
  });
}

function renderGameOver(attacker) {
  const bg = document.createElement("div");
  const container = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const playAgain = document.createElement("div");

  h1.textContent = `Game Over!`;
  h2.textContent = `${attacker.name} won`;
  playAgain.textContent = "Play Again";
  bg.classList.add("bg");
  playAgain.classList.add("button");
  container.classList.add("gameOver-cont");

  container.append(h1, h2);
  bg.append(container, playAgain);
  document.querySelector("body").append(bg);

  playAgain.addEventListener("click", () => {
    resetGame();
    initGame();
  });
}

function removeBackground() {
  document.querySelector(".bg").remove();
}

function removeButtons() {
  document.querySelectorAll(".button").forEach((button) => button.remove());
}

function showReservedSpaces() {
  const board = document.querySelector(".board-1");
  const player = board.player;

  for (let i = 0; i < 10; i++) {
    for (let u = 0; u < 10; u++) {
      const cell = document.getElementById(`1-${i}-${u}`);
      if (player.gameboard.board[i][u].reserved) cell.classList.add("reserved");
    }
  }
}

function hideReservedSpaces() {
  const board = document.querySelector(".board-1");
  const player = board.player;

  for (let i = 0; i < 10; i++) {
    for (let u = 0; u < 10; u++) {
      const cell = document.getElementById(`1-${i}-${u}`);
      if (player.gameboard.board[i][u].reserved)
        cell.classList.remove("reserved");
    }
  }
}

function returnDraggableShip(length) {
  const ship = document.createElement("div");
  ship.classList.add("selection_ship");
  ship.addEventListener("click", () => {
    ship.classList.toggle("vertical");
  });
  ship.addEventListener("dragstart", dragStart, "text");
  ship.draggable = true;
  for (let i = 0; i < length; i++) {
    const cell = document.createElement("div");
    cell.style.width = "50px";
    cell.style.height = "50px";
    cell.classList.add("cell-1");
    cell.classList.add("ship_friend");
    cell.setAttribute("id", `${i}-${length}`);
    cell.addEventListener("mousedown", assignCellToDrag);

    ship.append(cell);
  }

  return ship;
}

function playerAttack(click) {
  const c = click.target.id.split("-");
  const p1 = document.querySelector(".board-1").player;
  const AI = document.querySelector(".board-2").player;
  const y = c[1];
  const x = c[2];

  if (p1 === undefined) return;
  if (p1.turn === false) return;
  if (AI.gameboard.hasBeenHit([y, x]) === true) return;

  changeCellStlye(["2", y, x], AI, click.target);
  p1.attack([y, x], AI.gameboard);
  p1.turn = false;
  if (AI.gameboard.isGameOver()) return renderGameOver(p1);
  setTimeout(aiAttack, 600, p1, AI);
}

function aiAttack(p1, AI) {
  let [y, x] = p1.gameboard.returnRandomCoordinates();
  while (p1.gameboard.receiveAttack([y, x]) === false) {
    [y, x] = p1.gameboard.returnRandomCoordinates();
  }
  changeCellStlye(["1", y, x], p1);
  if (p1.gameboard.isGameOver()) return renderGameOver(AI);
  p1.turn = true;
}

function changeCellStlye(c, attacked) {
  const board = c[0];
  const y = c[1];
  const x = c[2];

  const cell = document.getElementById(`${board}-${y}-${x}`);
  if (attacked.gameboard.hasShip([y, x])) {
    attacked.AI
      ? cell.classList.add("ship_enemy_hit")
      : cell.classList.add("ship_friend_hit");
  } else {
    cell.classList.add("empty_hit");
    const mark = document.createElement("div");
    mark.classList.add("mark");
    cell.appendChild(mark);
  }
}

function startGame(player, AI) {
  AI.gameboard.randomFleet();
  renderShips(player);
  removeButtons();
  removeSelection();
}

function resetGame() {
  const main = document.querySelector(".main");
  removeBackground();
  main.innerHTML = "";
}

export {
  renderBoard,
  renderStart,
  hideBoard,
  renderGameOver,
  renderShips,
  showReservedSpaces,
  hideReservedSpaces,
};
