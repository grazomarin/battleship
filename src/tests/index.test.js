const { describe, test, expect } = require("@jest/globals");
import { Ship, Gameboard } from "../index.js";

describe("Ship", () => {
  test("check hit function", () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test("check isSunk function", () => {
    const ship = new Ship(2);
    expect(ship.isSunk()).toBe(false);
    ship.hits = 2;
    expect(ship.isSunk()).toBe(true);
  });
});

describe("Gameboard", () => {
  test("placeShip function", () => {
    const myBoard = new Gameboard();
    myBoard.placeShip([0, 1], 3);
    expect(myBoard.board[0][1].ship instanceof Ship).toBe(true);
    expect(myBoard.board[0][2].ship instanceof Ship).toBe(true);
    expect(myBoard.board[0][3].ship instanceof Ship).toBe(true);
  });

  test("receiveAttack to an empty cell", () => {
    const myBoard = new Gameboard();
    myBoard.receiveAttack([1, 1]);
    expect(myBoard.board[1][1].hit).toBe(true);
  });

  test("receiveAttack to a cell that has a ship", () => {
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
