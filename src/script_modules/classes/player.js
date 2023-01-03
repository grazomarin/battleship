import Gameboard from "./gameboard";

class Player {
  constructor(AI = false) {
    this.AI = AI;
    this.gameboard = new Gameboard();
  }

  randomAttack(gameboard) {
    let y = Math.floor(Math.random() * 10);
    let x = Math.floor(Math.random() * 10);

    if (gameboard.isFull()) throw new Error("no more empty space");

    if (gameboard.hasBeenHit([y, x])) {
      while (gameboard.hasBeenHit([y, x])) {
        y = Math.floor(Math.random() * 10);
        x = Math.floor(Math.random() * 10);
      }
    }
    gameboard.receiveAttack([y, x]);
  }

  attack(c, gameboard) {
    gameboard.receiveAttack([c[0], c[1]]);
  }
}

export default Player;
