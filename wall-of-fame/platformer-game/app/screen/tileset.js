export default class TileSet {
  constructor(tileSize, columns, world = 1) {
    const worldKey = `world-${world}`;
    this.loaded = false;
    this.columns = columns;
    this.tileSize = tileSize;

    this.images = [];
    this.images.push(null);

    this.objectImages = [];
    this.objectImages.push(null);

    this.tileBackground = new Image();

    const meta = {
      1: { objectLen: 11, tileLen: 18 },
      2: { objectLen: 10, tileLen: 18 },
      3: { objectLen: 15, tileLen: 16 },
      4: { objectLen: 14, tileLen: 16 },
      5: { objectLen: 12, tileLen: 25 },
    };

    this.loadCount = 0;
    this.assetCount = meta[world].objectLen + meta[world].tileLen + 1;
    const onImgLoad = (e) => {
      this.loadCount += 1;

      if (this.assetCount === this.loadCount) {
        this.loaded = true;
      }
    };

    for (let index = 1; index <= meta[world].objectLen; index++) {
      const image = new Image();
      image.onload = onImgLoad;
      image.src = `./assets/sprites/${worldKey}/objects/${index}.png`;

      this.objectImages.push(image);
    }

    for (let index = 1; index <= meta[world].tileLen; index++) {
      const image = new Image();
      image.onload = onImgLoad;
      image.src = `./assets/sprites/${worldKey}/tiles/${index}.png`;

      this.images.push(image);
    }

    this.tileBackground.src = `./assets/sprites/${worldKey}/bg.png`;
    this.tileBackground.onload = onImgLoad;
  }
}
