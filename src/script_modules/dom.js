import logo from "../images/logo.svg";
import {
  assignCellToDrag,
  dragEnd,
  dragOver,
  dragStart,
  drop,
} from "./drag_n_drop";
import { initGame } from "./game";
document.querySelector(".head_logo").src = logo;

function returnBoard(player) {
  const board = document.createElement("div");
  board.classList = player.AI ? "board-2" : "board-1";
  board.player = player;

  for (let i = 0; i < 10; i++) {
    for (let u = 0; u < 10; u++) {
      const cell = document.createElement("div");
      cell.classList = player.AI ? "cell-2" : "cell-1";
      cell.id = `${player.AI ? `2-${i}-${u}` : `1-${i}-${u}`}`;
      board.append(cell);
    }
  }
  return board;
}

function showBoard(board) {
  document.querySelector(`.board-${board}`).parentNode.style.display = "grid";
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
  ship5Quant.id = "ship5";
  ship3Quant.id = "ship3";
  ship2Quant.id = "ship2";
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
  const board1 = returnBoard(player);
  const board2 = returnBoard(AI);
  const main = document.querySelector(".main");
  const board1Cont = document.createElement("div");
  const board2Cont = document.createElement("div");
  const nameAI = document.createElement("div");
  const [buttonCont, startBtn, randomBtn, resetBtn] = returnButtons();
  const [inputCont, nameInput, nameLable, nameError] = returnNameInput();

  board1Cont.classList.add("boardCont");
  board2Cont.classList.add("boardCont");
  nameAI.classList.add("name");
  nameAI.textContent = "AI";
  board1Cont.append(inputCont, board1, buttonCont);
  board2Cont.append(nameAI, board2);
  main.append(board1Cont, board2Cont);
  hideBoard(board2Cont);

  board1.player = player;
  board2.player = AI;

  board1.childNodes.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("drop", drop);
  });

  addButtonEventListeners(player, AI);
  renderSelection();
}

function displayPlayerName(name) {
  const nameElem = document.createElement("div");
  const input = document.querySelector(".input_input");
  const label = document.querySelector(".input_label");
  label.remove();
  nameElem.classList.add("name");
  nameElem.textContent = name;
  input.parentNode.replaceChild(nameElem, input);
}

function displayPlayerNameError(errorElem) {
  errorElem.style.display = "block";
  setTimeout(() => {
    errorElem.style.display = "none";
  }, 2500);
  return;
}

function returnNameInput() {
  const inputCont = document.createElement("div");
  const nameLable = document.createElement("label");
  const nameInput = document.createElement("input");
  const nameError = document.createElement("div");

  nameInput.required = true;
  nameInput.id = "name";
  nameLable.textContent = "Name: ";
  nameError.textContent = "Enter a valid name";
  nameLable.setAttribute("for", "name");
  inputCont.classList.add("input_cont");
  nameLable.classList.add("input_label");
  nameInput.classList.add("input_input");
  nameError.classList.add("input_error");

  inputCont.append(nameLable, nameInput, nameError);

  return [inputCont, nameInput, nameLable, nameError];
}

function returnButtons() {
  const buttonCont = document.createElement("div");
  const startBtn = document.createElement("div");
  const randomBtn = document.createElement("div");
  const resetBtn = document.createElement("div");

  buttonCont.classList.add("button-cont");
  startBtn.classList.add("button", "start");
  randomBtn.classList.add("button", "random");
  resetBtn.classList.add("button", "reset");

  startBtn.textContent = "Start Game";
  randomBtn.textContent = "Random";
  resetBtn.textContent = "Reset Board";
  buttonCont.append(startBtn, resetBtn, randomBtn);

  return [buttonCont, startBtn, randomBtn, resetBtn];
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

function addButtonEventListeners(player, AI) {
  const main = document.querySelector(".main");
  const startBtn = document.querySelector(".start");
  const randomBtn = document.querySelector(".random");
  const resetBtn = document.querySelector(".reset");
  const nameInput = document.querySelector(".input_input");
  const nameError = document.querySelector(".input_error");

  startBtn.addEventListener("click", () => {
    if (nameInput.value === "") return displayPlayerNameError(nameError);

    if (player.gameboard.ships.length === 6) {
      player.name = nameInput.value;
      main.style.justifyContent = "space-around";
      displayPlayerName(nameInput.value);
      showBoard("2");
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
  ship.addEventListener("dragstart", dragStart);
  ship.addEventListener("dragend", dragEnd);
  ship.draggable = true;
  for (let i = 0; i < length; i++) {
    const cell = document.createElement("div");
    cell.style.width = "50px";
    cell.style.height = "50px";
    cell.classList.add("cell-1");
    cell.classList.add("ship_friend");
    cell.id = `${i}-${length}`;
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
  main.style = "";
}

export {
  returnBoard,
  renderStart,
  hideBoard,
  renderGameOver,
  renderShips,
  showReservedSpaces,
  hideReservedSpaces,
};
