export default class Collider {
  collide(value, object, tileX, tileY, tileSize) {
    const router = (direction) => {
      switch (direction) {
        case "t":
          return this.collidePlatformTop(object, tileY);
        case "b":
          return this.collidePlatformBottom(object, tileY + tileSize);
        case "l":
          return this.collidePlatformLeft(object, tileX);
        case "r":
          return this.collidePlatformRight(object, tileX + tileSize);
        default:
          break;
      }
    };

    let flag = false;
    if (typeof value === "string") {
      const keys = value.split("");

      for (let index = 0; index < keys.length; index++) {
        flag = router(keys[index]);
        if (flag) {
          break;
        }
      }
    }

    return flag;
  }

  collidePlatformBottom(object, bottomTile) {
    if (object.getTop() < bottomTile && object.getOldTop() >= bottomTile) {
      object.setTop(bottomTile);
      object.velocityY = 0;
      return true;
    }
    return false;
  }

  collidePlatformLeft(object, leftTile) {
    if (object.getRight() > leftTile && object.getOldRight() <= leftTile) {
      object.setRight(leftTile - 0.01);
      object.velocityX = 0;
      return true;
    }
    return false;
  }

  collidePlatformRight(object, rightTile) {
    if (object.getLeft() < rightTile && object.getOldLeft() >= rightTile) {
      object.setLeft(rightTile);
      object.velocityX = 0;
      return true;
    }
    return false;
  }

  collidePlatformTop(object, topTile) {
    if (object.getBottom() > topTile && object.getOldBottom() <= topTile) {
      object.setBottom(topTile - 0.01);
      object.velocityY = 0;
      object.jumping = false;
      return true;
    }
    return false;
  }
}
