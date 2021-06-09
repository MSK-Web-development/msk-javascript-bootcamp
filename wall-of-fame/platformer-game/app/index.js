import Game from "./game";
import Screen from "./screen";
import GameEngine from "./engine";
import Controller from "./controller";
import MouseInput from "./controller/mouse-input";

import {
  uid,
  getData,
  setData,
  populateHelp,
  populateLinks,
  populatePortals,
  preLoadAndFetch,
} from "./util";

preLoadAndFetch();
populateLinks();
populateHelp();

import areas from "./areas";

let loadingActive = false;
let controllerActive = false;
const isTouchesEnabled = "ontouchstart" in document.documentElement;

const helpBtn = document.getElementById("helpBtn");
const infoBtn = document.getElementById("infoBtn");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const soundBtn = document.getElementById("soundBtn");
const musicBtn = document.getElementById("musicBtn");
const portalBtn = document.getElementById("portalBtn");
const helpScreen = document.getElementById("helpScreen");
const helpCloseBtn = document.getElementById("helpCloseBtn");
const portalScreen = document.getElementById("portalScreen");
const portalCloseBtn = document.getElementById("portalCloseBtn");
const infoScreen = document.getElementById("infoScreen");
const infoCloseBtn = document.getElementById("infoCloseBtn");
const refreshBtn = document.getElementById("refreshBtn");
const startTitle = document.getElementById("startTitle");
const scoreTitle = document.getElementById("scoreTitle");
const startScreen = document.getElementById("startScreen");
const controllers = document.querySelectorAll(".controller");
const loadingScreen = document.getElementById("loadingScreen");
const progressValue = document.getElementById("progressValue");
const persistentControllers = document.querySelectorAll(".persistent-controller");

const toggleSoundBtn = (value) => {
  soundBtn.classList[value ? "add" : "remove"]("cancel-cross");
};

const toggleMusicBtn = (value) => {
  musicBtn.classList[value ? "add" : "remove"]("cancel-cross");
};

const toggleControllers = (value) => {
  controllerActive = value;
  controllers.forEach(
    (controller) => (controller.style.visibility = isTouchesEnabled && value ? "visible" : "hidden")
  );
  persistentControllers.forEach(
    (controller) => (controller.style.visibility = value ? "visible" : "hidden")
  );
};

const togglePortalScreen = (value) => {
  portalScreen.style.visibility = !value ? "hidden" : "visible";
};

const toggleHelpScreen = (value) => {
  helpScreen.style.visibility = !value ? "hidden" : "visible";
};

const toggleInfoScreen = (value) => {
  infoScreen.style.visibility = !value ? "hidden" : "visible";
};

const toggleStartScreen = (value) => {
  startScreen.style.visibility = !value ? "hidden" : "visible";
};

const toggleLoadingScreen = (value) => {
  loadingActive = value;
  loadingScreen.style.visibility = !value ? "hidden" : "visible";
};

const setProgressValue = (value) => {
  progressValue.style.width = `${value}%`;
};

window.addEventListener("load", function () {
  "use strict";

  let areaId = 1;
  let loaded = false;
  let paused = false;
  let areaNumber = 1;
  let worldChanged = false;
  const totalAreaNumber = 5;

  toggleSoundBtn(getData("mute_sounds"));
  toggleMusicBtn(getData("mute_music"));
  clearInterval(loadInterval);
  toggleLoadingScreen(false);
  setProgressValue(0);

  const controller = new Controller();

  // GAME
  const game = new Game((score) => {
    startTitle.textContent = "Game Over";
    scoreTitle.textContent = "Score: " + score;

    const savedScore = getData("high_score") || 0;
    const highScore = savedScore < score ? score : savedScore;
    setData("high_score", savedScore < score ? score : savedScore);

    if (highScore) {
      document.getElementById("highScore").innerHTML = `High Score: ${highScore}`;
    }

    setTimeout(() => {
      toggleStartScreen(true);
    }, 1500);
  });

  const setupWorld = () => {
    game.world.setup(areas[areaId]);
  };

  // SCREEN
  let screen;

  const setupScreen = () => {
    screen = new Screen(document.querySelector("canvas"), areas[areaId].world);

    screen.buffer.canvas.height = game.world.height;
    screen.buffer.canvas.width = game.world.width;
  };

  setupScreen();

  // GAME ENGINE

  const loadPercent = () => {
    const totalAssets = (worldChanged ? 0 : game.world.assetCount) + screen.assetCount;
    const totalLoaded = (worldChanged ? 0 : game.world.loadCount) + screen.loadCount;

    return Math.round((totalLoaded / totalAssets) * 100);
  };

  const isLoaded = () => {
    return game.isLoaded() && screen.isLoaded();
  };

  // update game logic
  const update = () => {
    loaded = isLoaded();
    const loadValue = loadPercent();

    const { player, portal } = game.world;

    if (loadValue < 100) {
      setProgressValue(loadValue == 99 ? 100 : loadValue);
    }

    if (!loaded) {
      if (controllerActive) {
        toggleControllers(false);
      }
      if (!loadingActive) {
        toggleLoadingScreen(true);
      }
    } else {
      if (loadingActive) {
        toggleLoadingScreen(false);
        setProgressValue(0);
      }
      if (!controllerActive) {
        toggleControllers(true);
      }
    }

    if (!game.over && loaded && !paused) {
      if (controller.left.active) {
        player.moveLeft();
      }
      if (controller.right.active) {
        player.moveRight();
      }
      if (controller.up.active) {
        if (!player.jumping) {
          game.world.playJumpSound();
        }
        player.jump();
        controller.up.active = false;
      }
      if (controller.fire.active && !player.firing) {
        const { fireballs } = game.world;
        const offsetX = player.direction < 0 ? -32 : 8;

        player.fire();
        game.world.playFireSound();
        fireballs.add(uid(), player.x + offsetX, player.y - 16, player.direction);
        controller.fire.active = false;
      }
    }

    if (portal) {
      worldChanged = true;
      engine.hold();

      const { direction, destinationArea } = portal;
      if (destinationArea !== areaId) {
        if (direction < 0) {
          areaNumber--;
        } else {
          areaNumber++;
        }

        if (areaNumber >= totalAreaNumber) {
          areaNumber = 1;
        }
        if (areaNumber <= 0) {
          areaNumber = totalAreaNumber;
        }
      }

      areaId = destinationArea;

      setupWorld();
      setupScreen();

      engine.resume();
    }

    game.update();
  };

  // render assets
  const render = () => {
    screen.drawBackground();

    const {
      map,
      coins,
      water,
      player,
      columns,
      objects,
      enemies,
      fireballs,
      totalCoins,
      totalEnemies,
    } = game.world;

    // draw water animations
    if (water) {
      for (let index = 0; index < water.items.length; index++) {
        const waterItem = water.items[index];

        screen.drawObject(
          waterItem.animator.frameValue,
          waterItem.x,
          waterItem.y,
          waterItem.width,
          waterItem.height,
          waterItem.offsetX,
          waterItem.offsetY
        );
      }
    }

    screen.drawMap(map);
    screen.drawMapObjects(objects);
    // screen.drawArea(game.world.portals);
    // screen.drawArea(game.world.deathAreas);
    // screen.drawArea(game.world.enemies.items);

    // draw coins
    if (coins) {
      for (let index = 0; index < coins.items.length; index++) {
        const coin = coins.items[index];

        screen.drawObject(
          coin.animator.frameValue,
          coin.x,
          coin.y,
          coin.width,
          coin.height,
          coin.offsetX,
          coin.offsetY
        );
        // screen.drawText(coin.id, coin.x, coin.y);
        // screen.drawRect(coin);
      }
    }

    // draw fireballs
    if (fireballs) {
      for (let index = 0; index < fireballs.items.length; index++) {
        const fireball = fireballs.items[index];

        screen.drawObject(
          fireball.animator.frameValue,
          fireball.x,
          fireball.y,
          fireball.width,
          fireball.height
        );
      }
    }

    // draw enemies
    if (enemies) {
      for (let index = 0; index < enemies.items.length; index++) {
        const enemy = enemies.items[index];

        screen.drawObject(
          enemy.animator.frameValue,
          enemy.x,
          enemy.y,
          enemy.width,
          enemy.height,
          0,
          1
        );
      }
    }

    // draw player
    const dead = game.world.isPlayerDead;
    const deadOffset = dead ? (player.direction < 0 ? 12 : -12) : 0;
    const xOffset = player.direction < 0 ? -36 + deadOffset : -12 + deadOffset;
    screen.drawPlayer(
      player.animator.frameValue,
      player.getLeft(),
      player.getTop(),
      60,
      40,
      xOffset,
      -24
    );

    // draw coin count
    const image = new Image();
    image.src = "./assets/sprites/coin/image 1.webp";
    const coinTextOffest = totalCoins >= 10 && totalCoins <= 99 ? 3 : totalCoins > 99 ? 3.4 : 2.7;

    screen.drawObject(image, (columns - 1.3) * 16, 8, 10, 10);
    screen.drawText("x", (columns - 2) * 16, 15);
    screen.drawText(totalCoins, (columns - coinTextOffest) * 16, 16.1);

    screen.drawText(areaNumber, 48, 15.3);
    screen.drawText("Area", 12, 15.3);
    screen.drawText("x", 38, 15);

    const score = totalEnemies * 100 + totalCoins * 20;
    const scoreTextOffest = score >= score >= 10 && score <= 99 ? 3 : score > 99 ? 3.4 : 2.7;
    screen.drawText(score, (columns - scoreTextOffest) * 9, 15.3);

    screen.render();
  };

  const resize = () => {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    if (width < 600) {
      [width, height] = [height, width];
    }

    screen.resize(width - 4, height - 4, game.world.height / game.world.width);
    screen.render();
  };

  resize();

  var engine = new GameEngine(1000 / 30, update, render);

  // EVENTS HANDLER
  const keyDownUp = ({ type, keyCode }) => {
    controller.keyDownUp(type, keyCode);
  };

  window.addEventListener("keydown", keyDownUp);
  window.addEventListener("keyup", keyDownUp);
  window.addEventListener("resize", resize);

  const leftMouse = new MouseInput("leftBtn", (e) => {
    clearMouse();
    controller.keyDownUp(e, 37);
  });
  const rightMouse = new MouseInput("rightBtn", (e) => {
    clearMouse();
    controller.keyDownUp(e, 39);
  });
  const upMouse = new MouseInput("jumpBtn", (e) => {
    clearMouse();
    controller.keyDownUp(e, 32);
  });

  const fireMouse = new MouseInput("fireBtn", (e) => {
    clearMouse();
    controller.keyDownUp(e, 13);
  });

  const clearMouse = () => {
    upMouse.actions.clear();
    fireMouse.actions.clear();
    leftMouse.actions.clear();
    rightMouse.actions.clear();
  };

  const loadWorld = (id = 1, areaNum = 1, left = 40, top = 100, refresh = false) => {
    clearMouse();
    startTitle.textContent = "";
    scoreTitle.textContent = "";
    toggleStartScreen(false);

    const start = () => {
      game.world.reset();
      game.over = false;

      engine.hold();

      game.world.player.setLeft(left);
      game.world.player.setTop(top);

      areaId = id;
      areaNumber = areaNum;

      setupWorld();
      setupScreen();

      resize();

      engine.resume();
    };

    if (paused) {
      paused = false;

      game.world.playThemeMusic();
      startBtn.textContent = "play";

      if (refresh) {
        start();
      }
    } else {
      start();
    }

    if (!engine.started) {
      engine.start();
    }
  };

  const onPortalClick = ({ id, areaNum, left, top }) => {
    togglePortalScreen(false);
    loadWorld(id, areaNum, left, top, true);
  };

  populatePortals(onPortalClick);

  startBtn.onclick = () => {
    loadWorld();
  };

  pauseBtn.onclick = () => {
    clearMouse();
    toggleStartScreen(true);

    game.world.pauseThemeMusic();
    startBtn.textContent = "resume";

    paused = true;
  };

  refreshBtn.onclick = () => {
    areaNumber = 1;
    startBtn.click();
  };

  soundBtn.onclick = () => {
    const isMuted = !getData("mute_sounds");

    setData("mute_sounds", isMuted);
    toggleSoundBtn(isMuted);
  };

  musicBtn.onclick = () => {
    const isMuted = !getData("mute_music");

    setData("mute_music", isMuted);
    toggleMusicBtn(isMuted);
  };

  portalBtn.onclick = () => {
    togglePortalScreen(true);
  };

  helpBtn.onclick = () => {
    toggleHelpScreen(true);
  };

  helpCloseBtn.onclick = () => {
    toggleHelpScreen(false);
  };

  portalCloseBtn.onclick = () => {
    togglePortalScreen(false);
  };

  infoBtn.onclick = () => {
    toggleInfoScreen(true);
  };

  infoCloseBtn.onclick = () => {
    toggleInfoScreen(false);
  };

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      if (!paused) {
        game.world.playThemeMusic();
      }
    } else {
      game.world.pauseThemeMusic();
    }
  });

  // startBtn.click();
});
