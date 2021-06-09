import Object from "./object";
import Animator from "./animator";

export default class Fireballs {
  constructor() {
    this.items = [];
    this.loaded = false;

    this.frameSets = {};

    const keys = [{ id: "", count: 5 }];

    this.assetCount = 10;
    this.loadCount = 0;
    keys.forEach(({ count }) => {
      for (let index = 1; index <= count; index++) {
        const onImgLoad = () => {
          this.loadCount += 1;

          if (this.assetCount === this.loadCount) {
            this.loaded = true;
          }
        };
        const imageLeft = new Image();
        imageLeft.onload = onImgLoad;
        imageLeft.src = `./assets/sprites/fireball/left/image ${index}.webp`;
        const imageRight = new Image();
        imageRight.onload = onImgLoad;
        imageRight.src = `./assets/sprites/fireball/right/image ${index}.webp`;

        const addImage = (k, image) => {
          if (!this.frameSets[k]) {
            this.frameSets[k] = [];
          }
          this.frameSets[k].push(image);
        };

        addImage("fireballLeft", imageLeft);
        addImage("fireballRight", imageRight);
      }
    });
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

  add(id, x, y, direction) {
    this.items.push(
      new Fireball(
        id,
        x,
        y,
        direction,
        this.frameSets[`fireball${direction < 0 ? "Left" : "Right"}`]
      )
    );
  }

  remove(fireball) {
    this.items.splice(this.items.indexOf(fireball), 1);
  }

  reset() {
    this.items = [];
  }
}

class Fireball extends Object {
  constructor(id, x, y, direction, frameSet) {
    super(x, y, 32, 16);

    this.id = id;
    this.direction = direction;

    this.velocity = 5;

    this.animator = new Animator(frameSet);
  }

  update() {
    if (this.direction < 0) {
      this.x -= this.velocity;
    } else {
      this.x += this.velocity;
    }
  }

  updateAnimation() {
    this.animator.animate();
  }
}
