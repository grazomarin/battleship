import logo from "../images/logo.svg";
document.querySelector(".head_logo").src = logo;

import Player from "./player";

function renderBoards(p1, AI) {
  const main = document.querySelector(".main");
  const board1 = document.createElement("div");
  const board2 = document.createElement("div");
  board1.classList = "board-1";
  board2.classList = "board-2";

  for (let i = 0; i < 10; i++) {
    const row1 = document.createElement("div");
    const row2 = document.createElement("div");
    row1.classList = "row-1";
    row2.classList = "row-2";
    row1.setAttribute("id", `1-${i}`);
    row2.setAttribute("id", `2-${i}`);
    board1.appendChild(row1);
    board2.appendChild(row2);

    for (let u = 0; u < 10; u++) {
      const cell1 = document.createElement("div");
      const cell2 = document.createElement("div");
      cell1.classList = "cell-1";
      cell2.classList = "cell-2";
      cell1.setAttribute("id", `1-${i}-${u}`);
      cell2.setAttribute("id", `2-${i}-${u}`);

      row1.appendChild(cell1);
      row2.appendChild(cell2);
    }
  }
  main.append(board1, board2);
}

function renderShips(p1, AI) {
  for (let z = 0; z < 10; z++) {
    for (let x = 0; x < 10; x++) {
      const cell1 = document.getElementById(`1-${z}-${x}`);
      const cell2 = document.getElementById(`2-${z}-${x}`);
      cell1.attacker = AI;
      cell1.attacked = p1;
      cell2.attacker = p1;
      cell2.attacked = AI;
      cell2.addEventListener("click", playerAttack);
      if (p1.gameboard.board[z][x].ship) {
        document.getElementById(`1-${z}-${x}`).classList.add("ship_friend");
      }
      //   if (AI.gameboard.board[z][x].ship) {
      //     document.getElementById(`2-${z}-${x}`).classList.add("ship_enemy");
      //   }
    }
  }
}

function playerAttack(click) {
  const c = click.target.id.split("-");
  const p1 = click.target.attacker;
  const AI = click.target.attacked;
  const y = c[1];
  const x = c[2];

  if (p1 === undefined) return;
  if (p1.turn === false) return;
  if (AI.gameboard.hasBeenHit([y, x]) === true) return;

  changeCellStlye(["2", y, x], AI, click.target);
  p1.attack([y, x], AI.gameboard);
  p1.turn = false;
  if (isGameOver(p1, AI)) return;
  setTimeout(aiAttack, 700, p1, AI);
}

function aiAttack(p1, AI) {
  let [y, x] = p1.gameboard.returnRandomCoordinates();
  while (p1.gameboard.receiveAttack([y, x]) === false) {
    [y, x] = p1.gameboard.returnRandomCoordinates();
  }
  changeCellStlye(["1", y, x], p1);
  if (isGameOver(p1)) renderGameOver(AI);
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

function renderStartScreen() {
  const bg = document.createElement("div");
  const startBtn = document.createElement("div");
  bg.classList.add("bg");
  startBtn.classList.add("bg_button");
  startBtn.textContent = "Start Game";
  bg.appendChild(startBtn);
  document.querySelector("body").appendChild(bg);

  startBtn.addEventListener("click", startGame);
}

function startGame() {
  removeBackground();
  const p1 = new Player("Kamran");
  const AI = new Player("AI", true);
  p1.gameboard.randomFleet();
  AI.gameboard.randomFleet();
  renderShips(p1, AI);
}

function removeBackground() {
  document.querySelector(".bg").remove();
}

function isGameOver(attacked) {
  return attacked.gameboard.noShipsLeft() ? true : false;
}
function renderGameOver(attacker) {
  const bg = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  h1.textContent = `Game Over!`;
  h2.textContent = `${attacker.name} won`;
  bg.classList.add("bg");
  bg.append(h1, h2);
  document.querySelector("body").append(bg);
}

export { renderBoards, renderShips, renderStartScreen, startGame };
