const { describe, test, expect } = require("@jest/globals");
import Ship from "../ship";

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
