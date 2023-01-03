const { describe, test, expect } = require("@jest/globals");
import Gameboard from "../gameboard";
import Ship from "../ship";

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
