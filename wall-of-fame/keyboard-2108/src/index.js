import { addNote, deleteNote, getNotes } from './services/localstore';
import { addNotesToDOM, addWelcomeToDOM, toggleClasses } from './dom';
import { whiteNotes, blackNotes } from './constants/';
import { preLoad } from './utils/';

const closeLoading = () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
};

(async () => {
  await preLoad();

  closeLoading();

  const trackList = document.getElementById('noteList');

  const playBtn = document.getElementById('playBtn');
  const saveBtn = document.getElementById('saveBtn');
  const clearBtn = document.getElementById('clearBtn');
  const recordBtn = document.getElementById('recordBtn');
  const refreshBtn = document.getElementById('refreshBtn');

  const whiteKeys = document.querySelectorAll('.keyboard__key__white');
  const blackKeys = document.querySelectorAll('.keyboard__key__black.keyboard__key__black--real');

  let track = [];
  let timeout = 0;
  let record = false;
  let selectedTrack = 0;

  const metaData = {
    white: {},
    black: {},
  };
  whiteNotes.forEach((note, index) => {
    const key = `key${index}`;
    const file = `./notes/piano-${note.toLowerCase()}.wav`;

    metaData['white'][key] = { type: 'white', file, note, index };
  });

  blackNotes.forEach((note, index) => {
    const key = `key${index}`;
    const file = `./notes/piano-${note.toLowerCase()}-sharp.wav`;

    metaData['black'][key] = { type: 'black', file, note, index };
  });

  const clickKeyBoard = (type, num) => {
    const data = metaData[type][`key${num}`];
    const audio = new Audio(data.file);
    audio.play();

    if (record) {
      track.push({ data, time: new Date().valueOf() });
    }
  };

  whiteKeys.forEach((key, index) => {
    key.addEventListener('click', () => clickKeyBoard('white', index));
  });

  blackKeys.forEach((key, index) => {
    key.addEventListener('click', () => clickKeyBoard('black', index));
  });

  const onListItemClick = (data) => {
    toggelButtonPress(clearBtn, true);
    const itemId = data.target.dataset.id;
    selectedTrack = itemId;

    setNotesInDom();
  };

  playBtn.addEventListener('click', async () => {
    record = false;
    toggelButtonPress(recordBtn, false);

    if (selectedTrack) {
      const notes = await getNotes();
      const note = notes.find((n) => n.id == selectedTrack);

      if (note && note.notes) {
        track = note.notes;
      }
    }

    if (track.length) {
      clearAllTimeouts();
      toggelButtonPress(playBtn, true);
      toggelButtonPress(clearBtn, true);

      const firstTrack = track[0];
      const initialTime = firstTrack.time;

      track.forEach((t, i) => {
        const { data, time } = t;
        timeout = setTimeout(() => {
          const audio = new Audio(data.file);
          audio.play();

          toggelKeyPress(data, true);
          setTimeout(() => {
            toggelKeyPress(data, false);
          }, 100);

          if (i === track.length - 1) {
            toggelButtonPress(playBtn, false);
          }
        }, time - initialTime + 200);
      });
    } else {
      toggelButtonPress(clearBtn, false);
    }
  });

  clearBtn.addEventListener('click', async () => {
    clearAllTimeouts();
    toggelButtonPress(recordBtn, false);
    toggelButtonPress(clearBtn, false);
    toggelButtonPress(playBtn, false);
    record = false;
    track = [];

    if (selectedTrack) {
      await deleteNote(selectedTrack);
      selectedTrack = 0;
      setNotesInDom();
    }
  });

  recordBtn.addEventListener('click', () => {
    if (selectedTrack) {
      return;
    }

    clearAllTimeouts();
    toggelButtonPress(playBtn, false);
    record = !record;

    if (record) {
      track = [];
      toggelButtonPress(clearBtn, false);
    }

    toggelButtonPress(recordBtn, record);
  });

  saveBtn.addEventListener('click', async () => {
    if (selectedTrack) {
      return;
    }

    clearAllTimeouts();

    if (track.length) {
      await addNote(track);
      await setNotesInDom();

      trackList.scrollTop = trackList.scrollHeight;
    }
  });

  refreshBtn.addEventListener('click', async () => {
    track = [];
    record = false;
    selectedTrack = 0;

    clearAllTimeouts();
    toggelButtonPress(playBtn, false);
    toggelButtonPress(clearBtn, false);
    toggelButtonPress(recordBtn, false);
    setNotesInDom();
  });

  const clearAllTimeouts = () => {
    while (timeout) {
      clearTimeout(timeout--);
    }
  };

  const toggelButtonPress = (btn, flag) => {
    toggleClasses(btn, flag, ['keyboard__button--pressed']);
  };

  const toggelKeyPress = (data, flag) => {
    const { type, index } = data;

    if (type === 'white') {
      toggleClasses(whiteKeys[index], flag, [
        `keyboard__key__white__${index + 1}--pressed`,
        'keyboard__key__white--pressed',
      ]);
    } else if (type === 'black') {
      toggleClasses(blackKeys[index], flag, ['keyboard__key__black--pressed']);
    }
  };

  const setNotesInDom = async () => {
    try {
      const notes = await getNotes();

      if (notes.length) {
        addNotesToDOM(trackList, notes, selectedTrack, onListItemClick);
      } else {
        addWelcomeToDOM(trackList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  setNotesInDom();
})();
