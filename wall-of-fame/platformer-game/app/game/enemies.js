import Object from "./object";
import Animator from "./animator";

const enemyTypes = {
  pig: {
    maxV: 0.8,
    minV: 0.5,
    delay: 2,
    width: 21,
    height: 20,
  },
  slime: {
    maxV: 0.4,
    minV: 0.2,
    delay: 4,
    width: 23,
    height: 20,
  },
  chameleon: {
    maxV: 0.4,
    minV: 0.2,
    delay: 2,
    width: 22,
    height: 20,
  },
};

export default class Enemies {
  constructor(enemies = [], tileSize = 16, killedEnemies = "") {
    this.items = [];
    this.loaded = false;

    const keys = [
      { id: "pig", count: 16 },
      { id: "slime", count: 10 },
      { id: "chameleon", count: 8 },
    ];

    this.frameSets = {};

    this.loadCount = 0;
    this.assetCount = keys.reduce((total, { count }) => total + count * 2, 0);

    keys.forEach(({ id, count }) => {
      for (let index = 1; index <= count; index++) {
        const onImgLoad = () => {
          this.loadCount += 1;

          if (this.assetCount === this.loadCount) {
            this.loaded = true;
          }
        };
        const imageLeft = new Image();
        const imageRight = new Image();
        imageLeft.onload = onImgLoad;
        imageRight.onload = onImgLoad;
        imageLeft.src = `./assets/sprites/enemies/${id}/left/image_part_0${index}.png`;
        imageRight.src = `./assets/sprites/enemies/${id}/right/image_part_0${index}.png`;

        const addImage = (k, image) => {
          if (!this.frameSets[k]) {
            this.frameSets[k] = [];
          }
          this.frameSets[k].push(image);
        };

        addImage(`${id}Left`, imageLeft);
        addImage(`${id}Right`, imageRight);
      }
    });

    for (let index = 0; index < enemies.length; index++) {
      const { id, type, left, top, sway, dir } = enemies[index];

      if (!killedEnemies.includes(id)) {
        this.items.push(
          new Enemy(
            id,
            type,
            left * tileSize,
            top * tileSize,
            [this.frameSets[`${type}Left`], this.frameSets[`${type}Right`]],
            sway,
            dir
          )
        );
      }
    }
  }

  remove(enemy) {
    this.items.splice(this.items.indexOf(enemy), 1);
  }

  update() {
    for (let index = 0; index < this.items.length; index++) {
      this.items[index].update();
    }
  }

  updateAnimation() {
    for (let index = 0; index < this.items.length; index++) {
      this.items[index].updateAnimation();
    }
  }
}

class Enemy extends Object {
  constructor(id, type, x, y, frameSets, sway = 24, direction = 1) {
    const { width = 20, height = 20, delay = 2, maxV = 0.8, minV = 0.5 } = enemyTypes[type] || {};

    super(x, y - 4, width, height);

    this.id = id;
    this.sway = sway;
    this.frameSets = frameSets;

    this.baseX = x;
    this.baseY = y;
    this.delay = delay;
    this.direction = direction;
    this.velocity = Math.random() * (maxV - minV) + minV;

    this.animator = new Animator(frameSets[direction < 0 ? 0 : 1], delay);
  }

  update() {
    this.x += this.velocity * this.direction;

    if (this.x > this.baseX + this.sway) {
      this.direction = -1;
      this.animator.changeFrameSet(this.frameSets[0], this.delay);
    } else if (this.x <= this.baseX - this.sway) {
      this.direction = 1;
      this.animator.changeFrameSet(this.frameSets[1], this.delay);
    }
  }

  updateAnimation() {
    this.animator.animate();
  }
}
