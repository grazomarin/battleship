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

  test("attack the same coordinate twice", () => {
    const player1 = new Player();
    const player2 = new Player();
    player1.attack([7, 7], player2.gameboard);

    expect(player1.attack([7, 7], player2.gameboard)).toBe(false);
  });
});
