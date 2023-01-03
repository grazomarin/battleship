const { describe, test, expect } = require("@jest/globals");
import Player from "../player";

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
