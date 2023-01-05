import logo from "../images/logo.svg";
document.querySelector(".head_logo").src = logo;

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
      cell1.attacker = AI;
      cell1.attacked = p1;
      cell2.attacker = p1;
      cell2.attacked = AI;
      cell2.addEventListener("click", playerAttack);
      row1.appendChild(cell1);
      row2.appendChild(cell2);
    }
  }
  main.append(board1, board2);

  for (let z = 0; z < 10; z++) {
    for (let x = 0; x < 10; x++) {
      if (p1.gameboard.board[z][x].ship) {
        document.getElementById(`1-${z}-${x}`).style.backgroundColor = "blue";
      }
      if (AI.gameboard.board[z][x].ship) {
        document.getElementById(`2-${z}-${x}`).style.backgroundColor = "red";
      }
    }
  }
}

function playerAttack(click) {
  const c = click.target.id.split("-");
  const attacker = click.target.attacker;
  const attacked = click.target.attacked;
  const y = c[1];
  const x = c[2];
  attacked.gameboard.hasShip([y, x])
    ? (click.target.style.backgroundColor = "yellow")
    : (click.target.style.backgroundColor = "green");

  attacker.attack([y, x], attacked.gameboard);
  console.log(attacked);
}

export { renderBoards };
