import Object from "./object";

export default class Portal extends Object {
  constructor({
    x,
    y,
    width,
    height,
    direction,
    destinationX,
    destinationY,
    destinationArea,
  }) {
    super(x, y, width, height);

    this.direction = direction;
    this.destinationX = destinationX;
    this.destinationY = destinationY;
    this.destinationArea = destinationArea;
  }
}
