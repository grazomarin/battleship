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
    this.board = Array(10).fill([
      ...Array(10).fill({
        ship: false,
        hit: false,
      }),
    ]);
  }

  #hasShip(c) {
    return this.board[c[0]][c[1]].ship instanceof Ship ? true : false;
  }

  placeShip(c, length) {
    const ship = new Ship(length);
    for (let i = 0; i < ship.length; i++) {
      this.board[c[0]][c[1] + i].ship = ship;
    }
  }

  receiveAttack(c) {
    this.board[c[0]][c[1]].hit = true;
    if (this.#hasShip(c)) this.board[c[0]][c[1]].ship.hit();
  }
}

export { Ship, Gameboard };
