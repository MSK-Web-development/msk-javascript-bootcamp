export default class Object {
  constructor(x, y, width, height) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.xOld = x;
    this.y = y;
    this.yOld = y;
  }

  getBottom() {
    return this.y + this.height;
  }

  getLeft() {
    return this.x;
  }

  getRight() {
    return this.x + this.width;
  }

  getTop() {
    return this.y;
  }

  getOldBottom() {
    return this.yOld + this.height;
  }

  getOldLeft() {
    return this.xOld;
  }

  getOldRight() {
    return this.xOld + this.width;
  }

  getOldTop() {
    return this.yOld;
  }

  getCenterX() {
    return this.x + this.width * 0.5;
  }

  getCenterY() {
    return this.y + this.height * 0.5;
  }

  setBottom(y) {
    this.y = y - this.height;
  }

  setLeft(x) {
    this.x = x;
  }

  setRight(x) {
    this.x = x - this.width;
  }

  setTop(y) {
    this.y = y;
  }

  setOldBottom(y) {
    this.yOld = y - this.height;
  }

  setOldLeft(x) {
    this.xOld = x;
  }

  setOldRight(x) {
    this.xOld = x - this.width;
  }

  setOldTop(y) {
    this.yOld = y;
  }

  setCenterX(x) {
    this.x = x - this.width * 0.5;
  }

  setCenterY(y) {
    this.y = y - this.height * 0.5;
  }
}
