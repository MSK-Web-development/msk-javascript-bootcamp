import Input from "./input";

export default class Controller {
  constructor() {
    this.up = new Input();
    this.left = new Input();
    this.right = new Input();
    this.fire = new Input();
  }

  keyDownUp(type, keyCode) {
    let down = type == "keydown" ? true : false;

    switch (keyCode) {
      case 37:
      case 65:
        this.left.getInput(down);
        break;
      case 38:
      case 32:
        this.up.getInput(down);
        break;
      case 39:
      case 68:
        this.right.getInput(down);
        break;
      case 13:
      case 16:
        this.fire.getInput(down);
    }
  }
}
