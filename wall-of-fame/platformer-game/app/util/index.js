export const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const setData = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const preLoadAndFetch = () => {
  const items = {
    sprites: [
      { rel: "prefetch", key: "world-1", objects: 11, tiles: 18 },
      { rel: "prefetch", key: "world-2", objects: 10, tiles: 18 },
      { rel: "prefetch", key: "world-3", objects: 15, tiles: 16 },
      { rel: "prefetch", key: "world-4", objects: 14, tiles: 16 },
      { rel: "prefetch", key: "world-5", objects: 12, tiles: 25 },
    ],
    player: [
      { rel: "prefetch", key: "Dead", objects: 8 },
      { rel: "prefetch", key: "Idle", objects: 10 },
      { rel: "prefetch", key: "Jump", objects: 8 },
      { rel: "prefetch", key: "Run", objects: 8 },
    ],
    water: [{ rel: "prefetch", objects: 17 }],
    coin: [{ rel: "prefetch", objects: 16 }],
  };

  const body = document.getElementsByTagName("head")[0];

  const append = (href, rel, as = "image") => {
    const item = document.createElement("link");

    item.as = as;
    item.rel = rel;
    item.href = href;
    body.prepend(item);
  };

  items.sprites.forEach(({ rel, key, objects, tiles }) => {
    for (let index = 1; index <= objects; index++) {
      append(`./assets/sprites/${key}/objects/${index}.png`, rel);
    }
    for (let index = 1; index <= tiles; index++) {
      append(`./assets/sprites/${key}/tiles/${index}.png`, rel);
    }

    append(`./assets/sprites/${key}/bg.png`, rel);
  });

  items.player.forEach(({ rel, key, objects }) => {
    for (let index = 1; index <= objects; index++) {
      append(`./assets/sprites/player/left/${key} (${index}).webp`, rel);
      append(`./assets/sprites/player/right/${key} (${index}).webp`, rel);
    }
  });

  items.water.forEach(({ rel, objects }) => {
    for (let index = 1; index <= objects; index++) {
      append(`./assets/sprites/water/image ${index}.webp`, rel);
    }
  });

  items.coin.forEach(({ rel, objects }) => {
    for (let index = 1; index <= objects; index++) {
      append(`./assets/sprites/coin/image ${index}.webp`, rel);
    }
  });

  const audioFiles = [
    { rel: "preload", file: "grasslands" },
    { rel: "preload", file: "coin", ext: "wav" },
    { rel: "preload", file: "jump", ext: "wav" },
    { rel: "preload", file: "fall", ext: "mp3" },
    { rel: "preload", file: "iceland" },
    { rel: "preload", file: "desert" },
    { rel: "preload", file: "dungeon" },
  ];

  audioFiles.forEach(({ rel, file, ext = "mp3" }) => {
    if (rel === "preload") {
      const audio = new Audio();
      audio.url = `./assets/audio/${file}.${ext}`;
    } else {
      append(`./assets/audio/${file}.${ext}`, rel, "audio");
    }
  });
};

export const populatePortals = (onPortalClick) => {
  const data = [
    { name: "Grassland 1", id: 1, areaNum: 1, left: 40, top: 100, ss: "images/area_1.png" },
    { name: "Grassland 2", id: 2, areaNum: 2, left: 40, top: 100, ss: "images/area_2.png" },
    { name: "Grassland 3", id: 7, areaNum: 3, left: 40, top: 120, ss: "images/area_3.png" },
    { name: "Iceland 1", id: 3, areaNum: 4, left: 48, top: 100, ss: "images/area_4.png" },
    { name: "Iceland 2", id: 8, areaNum: 5, left: 32, top: 20, ss: "images/area_5.png" },
  ];

  const portalsWrapper = document.getElementById("portalsWrapper");
  portalsWrapper.className += "modal-content-wrapper";

  const itemWrapper = document.createElement("div");
  itemWrapper.classList.add("portal-item-wrapper");

  data.forEach((value) => {
    const { name, ss } = value;

    const div = document.createElement("div");
    div.className += "portal-item";

    const title = document.createElement("div");
    title.className += "portal-title";
    title.textContent = name;

    const overlay = document.createElement("div");
    overlay.className += "portal-overlay";

    const img = document.createElement("img");
    img.src = ss;
    img.className += "portal-item portal-img";
    img.addEventListener("click", () => onPortalClick(value));

    div.appendChild(img);
    div.appendChild(overlay);
    div.appendChild(title);
    itemWrapper.appendChild(div);
  });

  portalsWrapper.appendChild(itemWrapper);
};

export const populateLinks = () => {
  const links = [
    {
      className: "btn gh-btn social-btn btn-tut",
      style: "margin-left: 0px",
      link: "https://github.com/AKAspanion",
    },
    {
      className: "btn li-btn social-btn btn-tut",
      style: "",
      link: "https://www.linkedin.com/in/spanion/",
    },
    {
      className: "btn in-btn social-btn btn-tut",
      style: "",
      link: "https://www.instagram.com/spanionkumar/",
    },
    {
      className: "btn fb-btn social-btn btn-tut",
      style: "",
      link: "https://www.facebook.com/AKAspanion/",
    },
  ];

  const linksWrapper = document.getElementById("linksWrapper");
  linksWrapper.className += "flex-item";

  links.forEach(({ link, style, className }) => {
    const a = document.createElement("a");
    a.className += className;
    a.target = "_blank";
    a.style = style;
    a.href = link;

    linksWrapper.appendChild(a);
  });
};

export const populateHelp = () => {
  const helpItems = [
    {
      name: "Mobile",
      content: [
        {
          items: [
            { className: "btn left-btn btn-tut", text: "to run left" },
            { className: "btn right-btn btn-tut", text: "to run right", notap: true },
          ],
        },
        {
          items: [
            { className: "btn fire-btn btn-tut flex-item", text: "to spit fire", child: "⚪️" },
          ],
        },
        {
          items: [{ className: "btn jump-btn btn-tut", text: "to jump" }],
        },
      ],
    },
    {
      name: "Desktop",
      content: [
        {
          items: [
            { className: "btn left-key-btn btn-tut key-btn", text: "to run left" },
            { className: "btn right-key-btn btn-tut key-btn", text: "to run right", notap: true },
          ],
        },
        {
          items: [
            { className: "btn fire-key-btn btn-tut flex-item key-btn", text: "to spit fire" },
          ],
        },
        {
          items: [{ className: "btn jump-key-btn btn-tut key-btn", text: "to jump" }],
        },
      ],
    },
  ];

  const helpWrapper = document.getElementById("helpWrapper");
  helpWrapper.className += "modal-content-wrapper";

  helpItems.forEach(({ name, content }) => {
    const modalContent = document.createElement("div");
    modalContent.className += "flex-item modal-content";

    const modalhead = document.createElement("div");
    modalhead.className += "modal-content-head";
    modalhead.textContent = name;

    const modalContentDesc = document.createElement("div");
    modalContentDesc.className += "flex-item modal-content-desc";

    content.forEach(({ items }) => {
      const flexItem = document.createElement("div");
      flexItem.className += "flex-item";

      items.forEach(({ className, text, child, notap }) => {
        if (!notap) {
          flexItem.innerHTML += "Tap";
        }

        const btn = document.createElement("div");
        btn.className = className;

        if (child) {
          btn.textContent = child;
        }

        flexItem.appendChild(btn);

        flexItem.innerHTML += text;
      });

      modalContentDesc.appendChild(flexItem);
    });

    modalContent.appendChild(modalhead);
    modalContent.appendChild(modalContentDesc);

    helpWrapper.appendChild(modalContent);
  });
};
