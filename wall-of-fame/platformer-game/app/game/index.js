import World from "./world";

export default class Game {
  constructor(gameOverCallback) {
    this.world = new World();
    this.over = false;

    this.onGameOver = () => {
      this.over = true;

      gameOverCallback(this.world.totalEnemies * 100 + this.world.totalCoins * 20);
    };
  }

  isLoaded() {
    return this.world.isLoaded();
  }

  update() {
    this.world.update(this.onGameOver);
  }

  setGameOver(val) {
    this.over = val;
  }
}
