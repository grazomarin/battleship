import Gameboard from "./gameboard";

class Player {
  constructor(name, AI = false) {
    this.name = name;
    this.AI = AI;
    this.gameboard = new Gameboard();
    this.turn = true;
  }

  attack(c, gameboard) {
    return gameboard.receiveAttack([c[0], c[1]]);
  }
}

export default Player;
