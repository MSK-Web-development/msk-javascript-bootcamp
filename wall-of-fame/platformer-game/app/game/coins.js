import Object from "./object";
import Animator from "./animator";
export default class items {
  constructor(objects = [], tileSize, collectedCoins) {
    this.items = [];
    this.loaded = false;

    const keys = [{ id: "", count: 16 }];

    this.frameSets = {};

    this.assetCount = 16;
    this.loadCount = 0;
    keys.forEach(({ count }) => {
      for (let index = 1; index <= count; index++) {
        const image = new Image();
        image.onload = (e) => {
          this.loadCount += 1;

          if (count === this.loadCount) {
            this.loaded = true;
          }
        };
        image.src = `./assets/sprites/coin/image ${index}.webp`;

        const addImage = (k, image) => {
          if (!this.frameSets[k]) {
            this.frameSets[k] = [];
          }
          this.frameSets[k].push(image);
        };

        addImage("coin", image);
      }
    });

    for (let index = 0; index < objects.length; index++) {
      const { id, left, top, offsetX, offsetY } = objects[index];

      if (!collectedCoins.includes(id)) {
        this.items.push(
          new Coin(id, left * tileSize, top * tileSize, offsetX, offsetY, this.frameSets["coin"])
        );
      }
    }
  }

  remove(coin) {
    this.items.splice(this.items.indexOf(coin), 1);
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

class Coin extends Object {
  constructor(id, x, y, offsetX = 3, offsetY = 3, frameSet) {
    super(x, y, 8, 10);

    this.id = id;
    this.offsetX = offsetX;
    this.offsetY = offsetY;

    this.baseX = x;
    this.baseY = y;
    this.positionX = Math.random() * Math.PI * 2;
    this.positionY = this.positionX * 2;

    this.animator = new Animator(frameSet);
  }

  update() {
    this.positionX += 0.1;
    this.positionY += 0.15;

    this.x = this.baseX + Math.cos(this.positionX) * 1.5;
    this.y = this.baseY + Math.sin(this.positionY);
  }

  updateAnimation() {
    this.animator.animate();
  }
}
