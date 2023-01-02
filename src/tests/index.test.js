const { describe, test, expect } = require("@jest/globals");
import { Ship, Gameboard, Player } from "../index.js";

describe("Ship class", () => {
  test("check hit function", () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.hits).toBe(1);
    expect(ship.isSunk()).toBe(false);
  });

  test("check isSunk function", () => {
    const ship = new Ship(2);
    expect(ship.isSunk()).toBe(false);
    ship.hits = 2;
    expect(ship.isSunk()).toBe(true);
  });
});

describe("Gameboard class", () => {
  test("placeShip function", () => {
    const myBoard = new Gameboard();
    myBoard.placeShip([0, 1], 3);
    expect(myBoard.board[0][1].ship instanceof Ship).toBe(true);
    expect(myBoard.board[0][2].ship instanceof Ship).toBe(true);
    expect(myBoard.board[0][3].ship instanceof Ship).toBe(true);
    expect(myBoard.ships[0] instanceof Ship).toBe(true);
    expect(myBoard.ships.length).toBe(1);
  });

  test("placeShip vertically", () => {
    const myBoard = new Gameboard();
    myBoard.placeShip([0, 1], 3, true);
    expect(myBoard.board[0][2].ship instanceof Ship).toBe(false);
    expect(myBoard.board[0][3].ship instanceof Ship).toBe(false);

    expect(myBoard.board[0][1].ship instanceof Ship).toBe(true);
    expect(myBoard.board[1][1].ship instanceof Ship).toBe(true);
    expect(myBoard.board[2][1].ship instanceof Ship).toBe(true);
  });

  test("placeShip to an invalid coordinate", () => {
    const myBoard = new Gameboard();
    expect(() => myBoard.placeShip([10, 10], 3)).toThrow("invalid coordinates");
  });

  test("placeShip to a coordinate that already has a ship", () => {
    const myBoard = new Gameboard();
    const fakeShip = new Ship(3);
    myBoard.board[1][1].ship = fakeShip;
    myBoard.board[1][2].ship = fakeShip;
    myBoard.board[1][3].ship = fakeShip;
    expect(() => {
      myBoard.placeShip([1, 2], 5);
    }).toThrow("there is a ship already placed");
  });

  test("receiveAttack to an empty coordinate", () => {
    const myBoard = new Gameboard();
    myBoard.receiveAttack([1, 1]);
    expect(myBoard.board[1][1].hit).toBe(true);
  });

  test("receiveAttack to a coordinate that has a ship", () => {
    const myBoard = new Gameboard();
    const fakeShip = new Ship(3);
    myBoard.board[1][1].ship = fakeShip;
    myBoard.board[1][2].ship = fakeShip;
    myBoard.board[1][3].ship = fakeShip;

    myBoard.receiveAttack([1, 1]);
    expect(myBoard.board[1][1].ship.hits).toBe(1);
    expect(myBoard.board[1][2].ship.hits).toBe(1);
    expect(myBoard.board[1][3].ship.hits).toBe(1);
  });
});

describe("Player class", () => {
  test("attack a valid empty coordinate", () => {
    const player1 = new Player();
    const player2 = new Player();
    player1.attack([1, 1], player2.gameboard);
    expect(player2.gameboard.board[1][1].hit).toBe(true);
  });

  test("attack a valid coordinate with enemy ship", () => {
    const player1 = new Player();
    const player2 = new Player();
    player2.gameboard.placeShip([1, 1], 3);
    player1.attack([1, 1], player2.gameboard);
    expect(player2.gameboard.board[1][1].hit).toBe(true);
    expect(player2.gameboard.board[1][1].ship.hits).toBe(1);
  });

  test("attack an invalid coordinate", () => {
    const player1 = new Player();
    const player2 = new Player();

    expect(() => player1.attack([10, 10], player2.gameboard)).toThrow(
      "invalid coordinates"
    );
  });

  test("attack the same coordinate twice", () => {
    const player1 = new Player();
    const player2 = new Player();
    player1.attack([7, 7], player2.gameboard);

    expect(() => player1.attack([7, 7], player2.gameboard)).toThrow(
      "already hit"
    );
  });

  test("AI attack", () => {
    const player1 = new Player();
    const player2 = new Player(true);
    player2.randomAttack(player1.gameboard);

    const attackedCoord = [];

    for (let i = 0; i < 10; i++) {
      player1.gameboard.board[i].forEach((square) => {
        if (square.hit === true) attackedCoord.push(square);
      });
    }
    expect(attackedCoord.length).toBe(1);
  });

  test("AI attacking all coordinates on the board", () => {
    const player1 = new Player();
    const player2 = new Player(true);
    for (let i = 0; i < 100; i++) {
      player2.randomAttack(player1.gameboard);
    }

    const attackedCoord = [];

    for (let i = 0; i < 10; i++) {
      player1.gameboard.board[i].forEach((square) => {
        if (square.hit === true) attackedCoord.push(square);
      });
    }
    expect(attackedCoord.length).toBe(100);
  });
});
