import Object from "./object";
import Animator from "./animator";
export default class Player extends Object {
  constructor() {
    super(40, 100, 12, 12);
    this.color = "#ff0000";
    this.loaded = false;

    this.running = false;
    this.jumping = true;
    this.firing = true;
    this.velocityX = 0;
    this.velocityY = 0;
    this.direction = 1;

    const keys = [
      { id: "Idle", count: 10 },
      { id: "Run", count: 8 },
      { id: "Jump", count: 8 },
      { id: "Dead", count: 8 },
      { id: "Fire", count: 4 },
    ];

    this.frameSets = {};

    this.loadCount = 0;
    this.assetCount = 38 * 2;
    keys.forEach(({ id, count }) => {
      for (let index = 1; index <= count; index++) {
        const onImgLoad = (e) => {
          this.loadCount += 1;

          if (this.assetCount === this.loadCount) {
            this.loaded = true;
          }
        };

        const imageLeft = new Image();
        imageLeft.onload = onImgLoad;
        const imageRight = new Image();
        imageRight.onload = onImgLoad;
        imageLeft.src = `./assets/sprites/player/left/${id} (${index}).webp`;
        imageRight.src = `./assets/sprites/player/right/${id} (${index}).webp`;

        const keyLeft = `${id.toLowerCase()}Left`;
        const keyRight = `${id.toLowerCase()}Right`;

        const addImage = (k, image) => {
          if (!this.frameSets[k]) {
            this.frameSets[k] = [];
          }
          this.frameSets[k].push(image);
        };

        addImage(keyLeft, imageLeft);
        addImage(keyRight, imageRight);
      }
    });

    this.animator = new Animator(this.frameSets["idleRight"]);
  }

  reset() {
    this.x = 40;
    this.y = 100;
    this.xOld = 40;
    this.yOld = 100;
    this.firing = false;
    this.running = false;
    this.jumping = false;
    this.velocityX = 0;
    this.velocityY = 0;
    this.direction = 1;
  }

  jump() {
    if (!this.jumping) {
      this.jumping = true;
      this.velocityY -= 18;
    }
  }

  fire() {
    if (!this.firing) {
      this.firing = true;
      setTimeout(() => {
        this.firing = false;
      }, 300);
    }
  }

  moveLeft() {
    this.direction = -1;
    this.velocityX -= 0.5;
  }
  moveRight() {
    this.direction = 1;
    this.velocityX += 0.5;
  }

  updateAnimation({ dead = false }) {
    if (dead) {
      if (this.direction < 0) this.animator.changeFrameSet(this.frameSets["deadLeft"], 2);
      else this.animator.changeFrameSet(this.frameSets["deadRight"], 2);

      this.animator.animate(dead);
      return;
    }

    if (this.velocityY < 0) {
      if (this.direction < 0) {
        this.animator.changeFrameSet(this.frameSets["jumpLeft"], 2);
      } else {
        this.animator.changeFrameSet(this.frameSets["jumpRight"], 2);
      }
    } else if (this.direction < 0) {
      if (this.velocityX < -0.1) {
        this.animator.changeFrameSet(this.frameSets["runLeft"]);
      } else {
        if (this.firing) {
          this.animator.changeFrameSet(this.frameSets["fireLeft"], 2);
        } else {
          this.animator.changeFrameSet(this.frameSets["idleLeft"]);
        }
      }
    } else if (this.direction > 0) {
      if (this.velocityX > 0.1) {
        this.animator.changeFrameSet(this.frameSets["runRight"]);
      } else {
        if (this.firing) {
          this.animator.changeFrameSet(this.frameSets["fireRight"], 2);
        } else {
          this.animator.changeFrameSet(this.frameSets["idleRight"]);
        }
      }
    }

    this.animator.animate();
  }

  update(gravity, friction) {
    this.xOld = this.x;
    this.yOld = this.y;
    this.velocityY += gravity;
    this.x += this.velocityX;
    this.y += this.velocityY;

    this.velocityX *= friction;
    this.velocityY *= friction;

    const absVelocityX = Math.abs(this.velocityX);
    this.running = absVelocityX === 0.435 ? false : absVelocityX >= 0.2;
  }
}
