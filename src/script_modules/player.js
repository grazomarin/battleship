import Gameboard from "./gameboard";

class Player {
  constructor(AI = false) {
    this.AI = AI;
    this.gameboard = new Gameboard();
    this.turn = true;
  }

  attack(c, gameboard) {
    return gameboard.receiveAttack([c[0], c[1]]);
  }
}

export default Player;
