import Coins from "./coins";
import Water from "./water";
import Player from "./player";
import Object from "./object";
import Portal from "./portal";
import Enemies from "./enemies";
import Collider from "./collider";
import Fireballs from "./fireballs";
import AudioController from "../controller/audio";

export default class World {
  constructor(friction = 0.87, gravity = 2) {
    this.friction = friction;
    this.gravity = gravity;

    this.rows = 12;
    this.columns = 16;
    this.tileSize = 16;

    this.loaded = true;

    this.totalCoins = 0;
    this.totalEnemies = 0;
    this.killedEnemies = "";
    this.collectedCoins = "";
    this.height = this.tileSize * this.rows;
    this.width = this.tileSize * this.columns;

    this.player = new Player();
    this.collider = new Collider();
    this.fireballs = new Fireballs();

    this.audioController = new AudioController();
  }

  setup(data) {
    if (this.theme !== data.theme) {
      if (data.theme) {
        this.playedThemeMusic = false;
        this.audioController.load(
          [
            { file: "fire", ext: "wav" },
            { file: "coin", ext: "wav" },
            { file: "foot", ext: "wav" },
            { file: "jump", ext: "wav" },
            { file: "hurt", ext: "wav" },
            { file: "fall", ext: "mp3" },
            { file: data.theme, ext: "mp3" },
          ],
          (val) => {
            this.loaded = val;
          }
        );

        this.stopThemeMusic();
        this.theme = data.theme;
      }
    }

    this.id = data.id;
    this.map = data.areaMap;
    this.isPlayerDead = false;
    this.objects = data.objectsMap;
    this.collisonMap = data.collisonMap;

    if (data.rows) {
      this.rows = data.rows;
      this.height = this.tileSize * this.rows;
    }
    if (data.columns) {
      this.columns = data.columns;
      this.width = this.tileSize * this.columns;
    }

    this.deathAreas = data.death.map(({ x, y, height, width }) => new Object(x, y, width, height));

    this.enemies = new Enemies(data.enemies, this.tileSize, this.killedEnemies);

    this.coins = new Coins(data.coins, this.tileSize, this.collectedCoins);

    this.portals = data.portals.map((p) => new Portal(p));

    this.water = new Water(data.water, this.tileSize);

    this.fireballs.reset();

    if (this.portal) {
      this.player.setCenterX(this.portal.destinationX);
      this.player.setCenterY(this.portal.destinationY);
      this.player.direction = this.portal.direction;

      this.portal = null;
    }
  }

  reset() {
    this.totalCoins = 0;
    this.totalEnemies = 0;
    this.killedEnemies = "";
    this.collectedCoins = "";

    this.player.reset();
  }

  playJumpSound() {
    AudioController.play("jump", "wav");
  }

  playFireSound() {
    AudioController.play("fire", "wav");
  }

  playThemeMusic() {
    if (!this.theme) return;

    this.audioController.play(this.theme, "mp3");
    this.audioController.volume(this.theme, 8);
    this.audioController.loop(this.theme);
  }

  stopThemeMusic() {
    if (!this.theme) return;

    this.audioController.stop(this.theme);
  }

  pauseThemeMusic() {
    if (!this.theme) return;

    this.audioController.pause(this.theme);
  }

  collideObject(object) {
    if (object.getLeft() < 0 - this.player.width / 2) {
      object.setLeft(-this.player.width / 2);
      object.velocityX = 0;
    } else if (object.getRight() > this.width + this.player.width / 2) {
      object.setRight(this.width + this.player.width / 2);
      object.velocityX = 0;
    }
    if (object.getTop() < 0 - this.player.height * 2.5) {
      object.setTop(0 - this.player.height * 2.5);
      object.velocityY = 0;
    } else if (object.getBottom() - 1 > this.height) {
      object.setBottom(this.height);
      object.velocityY = 0;
      object.jumping = false;
    }

    let bottom, left, right, top;

    const setTop = () => {
      top = this._normalizeIndex(Math.floor(object.getTop() / this.tileSize), this.rows);
    };

    const setBottom = () => {
      bottom = this._normalizeIndex(Math.floor(object.getBottom() / this.tileSize), this.rows);
    };

    const setLeft = () => {
      left = Math.floor(object.getLeft() / this.tileSize);
    };

    const setRight = () => {
      right = Math.floor(object.getRight() / this.tileSize);
    };

    setTop();
    setLeft();
    this.collider.collide(
      this.collisonMap[top][left],
      object,
      left * this.tileSize,
      top * this.tileSize,
      this.tileSize
    );

    setTop();
    setRight();
    this.collider.collide(
      this.collisonMap[top][right],
      object,
      right * this.tileSize,
      top * this.tileSize,
      this.tileSize
    );

    setBottom();
    setLeft();
    this.collider.collide(
      this.collisonMap[bottom][left],
      object,
      left * this.tileSize,
      bottom * this.tileSize,
      this.tileSize
    );

    setBottom();
    setRight();
    this.collider.collide(
      this.collisonMap[bottom][right],
      object,
      right * this.tileSize,
      bottom * this.tileSize,
      this.tileSize
    );
  }

  _normalizeIndex(index, maxIndex) {
    if (index >= maxIndex - 1) {
      return maxIndex - 1;
    } else if (index < 0) {
      return 0;
    }

    return index;
  }

  checkCollision(object1, object2, offsetX = 0, offsetY = 0) {
    if (
      object1.x < object2.x + object2.width + offsetX &&
      object1.x + object1.width > object2.x - offsetX &&
      object1.y < object2.y + object2.height + offsetY &&
      object1.y + object1.height > object2.y - offsetY
    ) {
      return true;
    }
    return false;
  }

  get assetCount() {
    return (
      this.coins.assetCount +
      this.water.assetCount +
      this.player.assetCount +
      this.enemies.assetCount +
      this.fireballs.assetCount
    );
  }

  get loadCount() {
    return (
      this.coins.loadCount +
      this.water.loadCount +
      this.player.loadCount +
      this.enemies.loadCount +
      this.fireballs.loadCount
    );
  }

  isLoaded() {
    return this.loaded && this.isAssetsLoaded();
  }

  isAssetsLoaded() {
    return (
      this.coins.loaded &&
      this.water.loaded &&
      this.player.loaded &&
      this.enemies.loaded &&
      this.fireballs.loaded
    );
  }

  onPlayerDead(onGameOver, audio = "fall") {
    if (!this.isPlayerDead) {
      AudioController.play(audio, "mp3");

      this.player.velocityX = 0;
      this.stopThemeMusic();
      onGameOver();
    }
    this.isPlayerDead = true;
    this.collectedCoins = "";
    this.killedEnemies = "";
    this.theme = null;
  }

  update(onGameOver) {
    AudioController.animate(() => {
      AudioController.play("foot", "wav", 0.15);
    }, this.player.running);

    if (!this.playedThemeMusic) {
      if (this.isLoaded()) {
        this.playThemeMusic();
        this.playedThemeMusic = true;
      }
    }

    this.player.update(this.gravity, this.friction);

    this.collideObject(this.player);

    // coins
    for (let index = 0; index < this.coins.items.length; index++) {
      const coin = this.coins.items[index];

      coin.update();
      coin.updateAnimation();

      if (this.checkCollision(this.player, coin, 5, 5)) {
        this.coins.remove(coin);

        this.collectedCoins += `${coin.id},`;

        AudioController.play("coin");
        this.totalCoins += 1;
      }
    }

    // fireballs
    for (let index = 0; index < this.fireballs.items.length; index++) {
      const fireball = this.fireballs.items[index];

      fireball.update();
      fireball.updateAnimation(this.player);

      for (let j = 0; j < this.enemies.items.length; j++) {
        const enemy = this.enemies.items[j];

        if (this.checkCollision(enemy, fireball)) {
          this.enemies.remove(enemy);

          this.killedEnemies += `${enemy.id},`;
          this.totalEnemies += 1;

          AudioController.play("hurt");
        }
      }

      if (fireball.x >= this.width + 50) {
        this.fireballs.remove(fireball);
      }
    }

    if (!this.isPlayerDead) {
      for (let index = 0; index < this.deathAreas.length; index++) {
        if (this.checkCollision(this.player, this.deathAreas[index])) {
          this.onPlayerDead(onGameOver);
          break;
        }
      }
    }

    // enemies
    if (!this.isPlayerDead) {
      for (let index = 0; index < this.enemies.items.length; index++) {
        const enemy = this.enemies.items[index];

        if (this.checkCollision(this.player, enemy)) {
          this.onPlayerDead(onGameOver);
          break;
        }

        enemy.update();
        enemy.updateAnimation();
      }
    }

    if (!this.portal) {
      for (let index = 0; index < this.portals.length; index++) {
        if (this.checkCollision(this.player, this.portals[index])) {
          this.portal = this.portals[index];
          break;
        }
      }
    }

    this.player.updateAnimation({ dead: this.isPlayerDead });

    this.water.update();
  }
}
