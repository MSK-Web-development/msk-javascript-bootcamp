export default class Input {
  constructor() {
    this.down = false;
    this.active = false;
  }

  getInput(down) {
    if (this.down != down) this.active = down;
    this.down = down;
  }
}
