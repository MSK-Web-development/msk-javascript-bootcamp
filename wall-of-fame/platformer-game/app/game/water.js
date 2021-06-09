import Object from "./object";
import Animator from "./animator";

export default class Water {
  constructor(waterObjects = [], tileSize) {
    this.items = [];
    this.loaded = false;

    const keys = [{ id: "", count: 17 }];

    this.frameSets = {};

    this.assetCount = 17;
    this.loadCount = 0;
    keys.forEach(({ count }) => {
      for (let index = 1; index <= count; index++) {
        const image = new Image();
        image.onload = () => {
          this.loadCount += 1;

          if (count === this.loadCount) {
            this.loaded = true;
          }
        };
        image.src = `./assets/sprites/water/image ${index}.webp`;

        const addImage = (k, image) => {
          if (!this.frameSets[k]) {
            this.frameSets[k] = [];
          }
          this.frameSets[k].push(image);
        };

        addImage("water", image);
      }
    });

    for (let index = 0; index < waterObjects.length; index++) {
      const { left, top } = waterObjects[index];

      this.items.push(
        new WaterObject(left * tileSize, top * tileSize, this.frameSets["water"], tileSize)
      );
    }
  }

  update() {
    for (let index = 0; index < this.items.length; index++) {
      this.items[index].updateAnimation();
    }
  }
}

class WaterObject extends Object {
  constructor(x, y, frameSet, tileSize) {
    super(x, y, tileSize, tileSize);

    this.animator = new Animator(frameSet, 3);
  }

  updateAnimation() {
    this.animator.animate();
  }
}
