import Ship from "./ship";

class Gameboard {
  constructor() {
    this.board = [];
    this.ships = [];

    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let i = 0; i < 10; i++) {
        row.push({
          hit: false,
          ship: false,
        });
      }
      this.board.push(row);
    }
  }

  hasShip(c) {
    return this.board[c[0]][c[1]].ship instanceof Ship ? true : false;
  }

  isValidCoordinate(c) {
    return this.board[c[0]] !== undefined
      ? this.board[c[0]][c[1]] !== undefined
        ? true
        : false
      : false;
  }

  isFull() {
    let hits = 0;
    for (let i = 0; i < 10; i++) {
      this.board[i].forEach((cell) => {
        if (cell.hit) hits++;
      });
    }
    return hits === 100 ? true : false;
  }

  hasBeenHit(c) {
    return this.board[c[0]][c[1]].hit ? true : false;
  }

  returnRandomCoordinates() {
    const y = Math.floor(Math.random() * 10);
    const x = Math.floor(Math.random() * 10);
    return [y, x];
  }

  placeShip(c, length, vertical = false) {
    const ship = new Ship(length);
    const y = c[0];
    const x = c[1];

    for (let i = 0; i < ship.length; i++) {
      if (vertical) {
        if (!this.isValidCoordinate([y + i, x])) return false;
        if (this.hasShip([y + (ship.length - 1), x])) {
          return false;
        }
        this.board[y + i][x].ship = ship;
      } else {
        if (!this.isValidCoordinate([y, x + (ship.length - 1)])) return false;
        if (this.hasShip([y, x + i])) {
          return false;
        }
        this.board[y][x + i].ship = ship;
      }
    }
    this.ships.push(ship);
  }

  receiveAttack(c) {
    if (this.hasBeenHit(c)) return false;

    this.board[c[0]][c[1]].hit = true;
    if (this.hasShip(c)) this.board[c[0]][c[1]].ship.hit();
  }

  randomFleet() {
    //place 2 ships length of 3
    // for (let i = 0; i < 3; i++) {
    //   let [y, x] = this.returnRandomCoordinates();
    //   if (
    //     this.placeShip([y, x], 3, Boolean(Math.round(Math.random()))) === false
    //   )
    //     continue;
    //   i++;
    // }
  }
}

export default Gameboard;
