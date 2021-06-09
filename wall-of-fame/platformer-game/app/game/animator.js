export default class Animator {
  constructor(frameSet, delay = 4) {
    this.count = 0;
    this.delay = delay >= 1 ? delay : 1;
    this.frameSet = frameSet;
    this.frameIndex = 0;
    this.frameValue = frameSet[0];
  }

  animate(last) {
    this.loop(last);
  }

  changeFrameSet(frameSet, delay = 4, frameIndex = 0) {
    if (this.frameSet === frameSet) {
      return;
    }

    this.count = 0;
    this.delay = delay;
    this.frameSet = frameSet;
    this.frameIndex = frameIndex;
    this.frameValue = frameSet[frameIndex];
  }

  loop(last) {
    this.count++;

    while (this.count > this.delay) {
      this.count -= this.delay;

      if (last && this.frameIndex === this.frameSet.length - 1) {
        this.frameIndex = this.frameSet.length - 1;
      } else {
        this.frameIndex =
          this.frameIndex < this.frameSet.length - 1 ? this.frameIndex + 1 : 0;
      }

      this.frameValue = this.frameSet[this.frameIndex];
    }
  }
}
