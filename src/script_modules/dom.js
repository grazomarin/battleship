import logo from "../images/logo.svg";
document.querySelector(".head_logo").src = logo;

function createBoards() {
  const main = document.querySelector(".main");
  const board1 = document.createElement("div");
  board1.classList = "board--p1";
  const row1 = document.createElement("div");
  row1.classList = "row--p1";
  const cell1 = document.createElement("div");
  cell1.classList = "cell--p1";

  const board2 = document.createElement("div");
  board2.classList = "board--p2";
  const row2 = document.createElement("div");
  row2.classList = "row--p2";
  const cell2 = document.createElement("div");
  cell2.classList = "cell--p2";

  for (let u = 0; u < 10; u++) {
    row1.appendChild(cell1.cloneNode(true));
    row2.appendChild(cell2.cloneNode(true));
  }

  for (let i = 0; i < 10; i++) {
    board1.appendChild(row1.cloneNode(true));
    board2.appendChild(row2.cloneNode(true));
  }
  main.appendChild(board1);
  main.appendChild(board2);
}

export { createBoards };
