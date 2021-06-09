import TileSet from "./tileset";

export default class Screen {
  constructor(canvas, world) {
    this.buffer = document.createElement("canvas").getContext("2d");
    this.context = canvas.getContext("2d");

    this.tileSet = new TileSet(16, 8, world);
  }

  drawMap(map) {
    const { images, tileSize } = this.tileSet;

    const drawTile = (x, y, value) => {
      const image = images[value];

      let destinationX = x * tileSize;
      let destinationY = y * tileSize;

      this.buffer.drawImage(image, destinationX, destinationY, tileSize, tileSize);
    };

    for (let i = 0; i < map.length; i++) {
      const row = map[i];
      for (let j = 0; j < row.length; j++) {
        const value = row[j];

        if (value) {
          if (Array.isArray(value)) {
            for (let index = 0; index < value.length; index++) {
              drawTile(j, i, value[index]);
            }
          } else {
            drawTile(j, i, value);
          }
        }
      }
    }
  }

  drawArea(object) {
    for (let index = 0; index < object.length; index++) {
      const { x, y, width, height } = object[index];
      this.buffer.fillRect(x, y, width, height);
    }
  }

  drawMapObjects(objects) {
    const { objectImages, tileSize } = this.tileSet;

    for (let i = 0; i < objects.length; i++) {
      const row = objects[i];
      for (let j = 0; j < row.length; j++) {
        const value = row[j];

        if (value) {
          value.forEach((element) => {
            const { id, xOffset = 0, yOffset = 0, width = 16, height = 16 } = element;
            const image = objectImages[id];

            let destinationX = j * tileSize;
            let destinationY = i * tileSize;

            this.buffer.drawImage(
              image,
              destinationX + xOffset,
              destinationY + yOffset,
              width,
              height
            );
          });
        }
      }
    }
  }

  drawBackground() {
    this.buffer.drawImage(
      this.tileSet.tileBackground,
      0,
      0,
      this.buffer.canvas.width,
      this.buffer.canvas.height
    );
  }

  drawText(text, x, y, color = "black") {
    this.buffer.fillStyle = color;
    this.buffer.font = "10px Arial";
    this.buffer.fillText(text, x, y);
  }

  drawPlayer(image, destinationX, destinationY, width, height, offsetX, offsetY, rect) {
    this.drawObject(image, destinationX + offsetX, destinationY + offsetY + 1, width, height);
  }

  drawObject(image, destinationX, destinationY, width, height, offsetX = 0, offsetY = 0) {
    this.buffer.drawImage(image, destinationX + offsetX, destinationY + offsetY, width, height);
  }

  drawRect({ x, y, width, height }) {
    this.buffer.fillRect(x, y, width, height);
  }

  get assetCount() {
    return this.tileSet.assetCount;
  }

  get loadCount() {
    return this.tileSet.loadCount;
  }

  isLoaded() {
    return this.tileSet.loaded;
  }

  resize(width, height, ratio) {
    if (height / width > ratio) {
      this.context.canvas.height = width * ratio;
      this.context.canvas.width = width;
    } else {
      this.context.canvas.height = height;
      this.context.canvas.width = height / ratio;
    }

    this.context.webkitImageSmoothingEnabled = false;
    this.context.mozImageSmoothingEnabled = false;
    this.context.imageSmoothingEnabled = false;
  }

  render() {
    this.context.drawImage(
      this.buffer.canvas,
      0,
      0,
      this.buffer.canvas.width,
      this.buffer.canvas.height,
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
  }
}
