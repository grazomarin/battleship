import logo from "../images/logo.svg";
import { initGame } from "./game";
document.querySelector(".head_logo").src = logo;

function renderBoard(player) {
  const board = document.createElement("div");
  board.classList = player.AI ? "board-2" : "board-1";

  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.classList = player.AI ? "row-2" : "row-1";
    row.setAttribute("id", `${player.AI ? `2-${i}` : `1-${i}`}`);
    board.appendChild(row);

    for (let u = 0; u < 10; u++) {
      const cell = document.createElement("div");
      cell.classList = player.AI ? "cell-2" : "cell-1";
      cell.setAttribute("id", `${player.AI ? `2-${i}-${u}` : `1-${i}-${u}`}`);
      row.append(cell);
    }
  }
  document.querySelector(".main").append(board);
}

function showBoard(player) {
  player.AI
    ? (document.querySelector(".board-2").style.display = "grid")
    : (document.querySelector(".board-1").style.display = "grid");
}

function hideBoard(player) {
  player.AI
    ? (document.querySelector(".board-2").style.display = "none")
    : (document.querySelector(".board-1").style.display = "none");
}

function clearBoard(board) {
  for (let z = 0; z < 10; z++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.getElementById(`${board}-${z}-${x}`);
      cell.classList = `cell-${board}`;
    }
  }
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

function renderStart(player, AI) {
  const main = document.querySelector(".main");
  const startBtn = document.createElement("div");
  const randomBtn = document.createElement("div");
  const buttonCont = document.createElement("div");

  startBtn.classList.add("button");
  randomBtn.classList.add("button");
  buttonCont.classList.add("button-cont");
  startBtn.textContent = "Start Game";
  randomBtn.textContent = "Random Fleet";
  startBtn.setAttribute("id", "start");
  randomBtn.setAttribute("id", "random");
  buttonCont.append(startBtn, randomBtn);
  main.append(buttonCont);

  main.style.flexDirection = "column";

  startBtn.addEventListener("click", () => {
    if (player.gameboard.ships.length !== 0) {
      main.style.flexDirection = "row";
      startGame(player, AI);
    }
  });

  randomBtn.addEventListener("click", () => {
    player.gameboard.randomFleet();
    clearBoard("1");
    renderShips(player, AI);
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
  if (AI.gameboard.isGameOver()) renderGameOver(p1);
  setTimeout(aiAttack, 600, p1, AI);
}

function aiAttack(p1, AI) {
  let [y, x] = p1.gameboard.returnRandomCoordinates();
  while (p1.gameboard.receiveAttack([y, x]) === false) {
    [y, x] = p1.gameboard.returnRandomCoordinates();
  }
  changeCellStlye(["1", y, x], p1);
  if (p1.gameboard.isGameOver()) renderGameOver(AI);
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
  showBoard(AI);
  AI.gameboard.randomFleet();
  renderShips(player, AI);
  removeButtons();
}

function resetGame() {
  const main = document.querySelector(".main");
  removeBackground();
  main.innerHTML = "";
}

export { renderBoard, renderStart, hideBoard, renderGameOver };
