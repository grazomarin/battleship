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

    if (vertical) {
      if (!this.isValidCoordinate([y + (ship.length - 1), x])) return false;
      for (let i = 0; i < length; i++) {
        if (this.hasShip([y + i, x])) return false;
      }
      for (let i = 0; i < length; i++) {
        this.board[y + i][x].ship = ship;
      }
    } else {
      if (!this.isValidCoordinate([y, x + (ship.length - 1)])) return false;
      for (let i = 0; i < length; i++) {
        if (this.hasShip([y, x + i])) return false;
      }
      for (let i = 0; i < length; i++) {
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
    // place 2 ships length of 3
    for (let i = 0; i <= 2; i++) {
      let [y, x] = this.returnRandomCoordinates();
      while (this.placeShip([y, x], 3, !!Math.round(Math.random())) === false) {
        [y, x] = this.returnRandomCoordinates();
      }
      i++;
    }
    //place 2 ships length of 2
    for (let u = 0; u <= 2; u++) {
      let [y, x] = this.returnRandomCoordinates();
      while (this.placeShip([y, x], 2, !!Math.round(Math.random())) === false) {
        [y, x] = this.returnRandomCoordinates();
      }
      u++;
    }
    //place 1 ship length of 5
    for (let z = 0; z <= 1; z++) {
      let [y, x] = this.returnRandomCoordinates();
      while (this.placeShip([y, x], 5, !!Math.round(Math.random())) === false) {
        [y, x] = this.returnRandomCoordinates();
      }
      z++;
    }
  }
}

export default Gameboard;
