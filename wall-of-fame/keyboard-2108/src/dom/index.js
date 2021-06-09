export const addNotesToDOM = (trackList, notes, selectedTrack, onListItemClick) => {
  trackList.innerHTML = '';

  notes.forEach((note) => {
    const node = document.createElement('li');

    node.setAttribute('data-id', note.id);
    node.classList.add('keyboard__list__item');

    if (selectedTrack == note.id) {
      node.classList.add('keyboard__list__item--selected');
    }

    node.addEventListener('click', onListItemClick);

    const text = document.createTextNode(`Track ${note.id}`);

    node.appendChild(text);
    trackList.appendChild(node);
  });
};

export const addWelcomeToDOM = (trackList, notes) => {
  trackList.innerHTML = '';
  const title = document.createElement('li');
  const subtitle = document.createElement('li');

  title.classList.add('keyboard__list__item', 'keyboard__title');
  subtitle.classList.add('keyboard__list__item', 'keyboard__subtitle');

  const titleText = document.createTextNode('Keyboard 2108');
  const subtitleText = document.createTextNode(
    'Play the piano tunes, record them, save them and replay them.'
  );

  title.appendChild(titleText);
  trackList.appendChild(title);

  subtitle.appendChild(subtitleText);
  trackList.appendChild(subtitle);
};

export const toggleClasses = (key, flag, className) => {
  if (flag) {
    key.classList.add(...className);
  } else {
    key.classList.remove(...className);
  }
};
