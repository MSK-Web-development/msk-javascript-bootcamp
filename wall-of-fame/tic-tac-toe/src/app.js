// App

const game = new GameCtrl();
const ui = new UICtrl();

function checkAndPlaySystem () {
  const { activeTurn, gameType } = game.getGameState();
  if (gameType === 'single' && activeTurn === 'X') {
    initiateGame()
  }
}


// takes in box number, updates state & renders UI
function playAndUpdateUI(selectedBox) {
  const { availableChoices, activeTurn } = game.getGameState();
  if (availableChoices.length > 0 && availableChoices.includes(selectedBox)) {
    // Play & Update UI
    const { playerWon, match } = game.play(selectedBox) || {};
    ui.paintUI({ id: selectedBox, player: activeTurn, playerWon, match });

    if (!playerWon) {
      setTimeout(() => checkAndPlaySystem(), 350)
    }
  }
}


// get random number b/w max & min values
function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// get random choice from available choices
function getRandomChoice(choices = []) {
  const randomNum = getRandomNumber(choices.length - 1, 0)
  return choices[randomNum]
}


// initiate new game & auto selects box if game type is single
function initiateGame() {
  const { availableChoices, gameType } = game.getGameState();

  // auto select box when game type is single
  if (gameType === 'single') {
    // get pc's next probable move or random choice
    const probableMove = game.checkForNextMove();
    const systemChoice =  probableMove !== undefined ? probableMove : getRandomChoice(availableChoices)
    playAndUpdateUI(systemChoice)
  }
}


selectors.gridBoxEl.addEventListener('click', function (e) {
  const { className } = e.target;
  if (className.includes('box')) {
    const selectedBox = +className.split(' ')[1].slice(-1);
    playAndUpdateUI(selectedBox)
  }
});


selectors.playAgainBtn.addEventListener('click', function () {
  game.restartGame();
  ui.resetUI();
  const { gameType } = game.getGameState()
  if (gameType === 'single') initiateGame()
});


selectors.themeToggler.addEventListener('click', function () {
  document.body.classList.toggle('light-theme');
  const btnTheme = selectors.themeToggler.textContent;
  selectors.themeToggler.textContent = btnTheme === 'Light' ? 'Dark' : 'Light';
});


selectors.chooseGameEl.addEventListener('change', (e) => {
  const gameType = e.target.value;
  game.storeGameType(gameType);
  // reset game
  game.restartGame();
  ui.resetUI();
  
  // initiate new game when game type changes
  initiateGame()
});


window.addEventListener('DOMContentLoaded', () => {
  const gameType = selectors.chooseGameEl.value;
  game.storeGameType(gameType);
  initiateGame()
});
