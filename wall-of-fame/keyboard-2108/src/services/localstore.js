import localforage from 'localforage';

localforage.config({
  name: 'spanion-keyboard',
  storeName: 'notes',
});

export const deleteNote = async (id) => {
  try {
    let notes = await localforage.getItem('key-notes');

    if (!notes) {
      return [];
    }

    if (notes.length) {
      notes = notes.filter((n) => n.id != id);
    }

    await localforage.setItem('key-notes', [...notes]);

    return notes;
  } catch (err) {
    console.log(err);
  }
};

export const getNotes = async () => {
  try {
    let notes = await localforage.getItem('key-notes');

    if (!notes) {
      return [];
    }

    return notes;
  } catch (err) {
    console.log(err);
  }
};

export const addNote = async (newNote) => {
  try {
    let notes = await localforage.getItem('key-notes');

    if (!newNote) {
      return notes;
    }

    if (!notes) {
      notes = [];
    }

    let index = 1;

    if (notes.length) {
      notes.sort((a, b) => a.id - b.id);

      console.log(notes);

      index = notes[notes.length - 1].id + 1;
    }

    const allNotes = [...notes, { id: index, notes: newNote }];
    await localforage.setItem('key-notes', allNotes);

    return allNotes;
  } catch (err) {
    console.log(err);
  }
};
