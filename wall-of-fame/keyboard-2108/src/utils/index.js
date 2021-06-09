import { whiteNotes, blackNotes } from '../constants/';

export const preLoad = () =>
  new Promise((resolve) => {
    try {
      let count = 0;
      const totalCount = whiteNotes.length + blackNotes.length;

      const onload = () => {
        count++;
        if (count >= totalCount) {
          resolve(true);
        }
      };

      whiteNotes.forEach((note) => {
        const myAudio = new Audio(`./notes/piano-${note.toLowerCase()}.wav`);
        myAudio.addEventListener('canplaythrough', onload, false);
      });

      blackNotes.forEach((note) => {
        const myAudio = new Audio(`./notes/piano-${note.toLowerCase()}-sharp.wav`);
        myAudio.addEventListener('canplaythrough', onload, false);
      });

      setTimeout(() => {
        resolve(true);
      }, 5000);
    } catch (error) {
      setTimeout(() => {
        resolve(true);
      }, 5000);
    }
  });
