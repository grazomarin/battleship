// import "./index.scss";

class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    return this.hits >= this.length ? true : false;
  }
}

class Gameboard {
  constructor() {
    this.board = [];
  }

  init() {
    for (let i = 0; i < 9; i++) {
      const row = [];
      for (let i = 0; i < 9; i++) {
        row.push({
          hit: false,
          ship: false,
        });
      }
      this.board.push(row);
    }
  }

  #hasShip(c) {
    return this.board[c[0]][c[1]].ship instanceof Ship ? true : false;
  }

  #checkIfCoordinateIsValid(c) {
    return this.board[c[0]][c[1]] !== undefined ? true : false;
  }

  placeShip(c, length) {
    const ship = new Ship(length);
    const y = c[0];
    const x = c[1];

    for (let i = 0; i < ship.length; i++) {
      if (!this.#checkIfCoordinateIsValid([y, x + i]))
        throw new Error("ship cannot be placed here");
      if (this.#hasShip([y, x + i])) {
        throw new Error("there is a ship already placed");
      }
      this.board[y][x + i].ship = ship;
    }
  }

  receiveAttack(c) {
    this.board[c[0]][c[1]].hit = true;
    if (this.#hasShip(c)) this.board[c[0]][c[1]].ship.hit();
  }
}

export { Ship, Gameboard };
