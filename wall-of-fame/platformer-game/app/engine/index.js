export default class GameEngine {
  constructor(timeStep, update, render) {
    this.timeStep = timeStep;
    this.update = update;
    this.render = render;
    this.started = false;

    this.pause = false;

    this.updated = false;

    this.time = null;
    this.extraTime = 0;
    this.animationFrameRequest = null;
    this.engineLoop = (t) => this.loop(t);
  }

  loop(timeStamp) {
    if (this.pause) {
      return;
    }

    this.animationFrameRequest = window.requestAnimationFrame(this.engineLoop);

    this.extraTime += timeStamp - this.time;
    this.time = timeStamp;

    if (this.extraTime >= this.timeStep * 3) {
      this.extraTime = this.timeStep;
    }

    while (this.extraTime >= this.timeStep) {
      this.extraTime -= this.timeStep;

      this.update(this.timeStamp);

      this.updated = true;
    }

    if (this.updated) {
      this.updated = false;
      this.render(this.timeStamp);
    }
  }

  start() {
    this.started = true;
    this.extraTime = this.timeStep;

    this.time = window.performance.now();
    this.animationFrameRequest = window.requestAnimationFrame(this.engineLoop);
  }

  stop() {
    window.cancelAnimationFrame(this.animationFrameRequest);
  }

  hold() {
    this.pause = true;
  }

  resume() {
    this.pause = false;
  }
}
