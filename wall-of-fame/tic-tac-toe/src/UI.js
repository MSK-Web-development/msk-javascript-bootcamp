const selectors = {
  boxesEl: document.querySelectorAll('.box'),
  gameOverEl: document.querySelector('.game-over'),
  gridBoxEl: document.querySelector('.game'),
  resultEl: document.querySelector('.result'),
  playAgainBtn: document.querySelector('.play-again'),
  themeToggler: document.querySelector('#theme-check'),
  chooseGameEl: document.querySelector('#choose-game')
};

// UI Controller to map UI
const UICtrl = function () {
  return {
    paintUI({ id, player, playerWon, match }) {
      selectors.boxesEl[id].classList.add(player);

      if (playerWon && match && match.length) {
        selectors.resultEl.innerHTML = `Player <span class="won">${playerWon}</span> Won!!`;
        selectors.gameOverEl.style.display = 'flex';

        selectors.boxesEl.forEach((boxEl, id) => {
          if (!match.includes(id)) {
            const classList = boxEl.classList;
            if (classList.contains('X')) {
              classList.add('playerX-light');
            } else {
              classList.add('playerO-light');
            }
          }
        });
        match.forEach(id => {
          selectors.boxesEl[id].classList.add(`player${playerWon}-won`);
        });
      } else if (playerWon === 'draw') {
        selectors.resultEl.textContent = "That's a Tie!";
        selectors.gameOverEl.style.display = 'flex';

        selectors.boxesEl.forEach((boxEl, id) => {
          const classList = boxEl.classList;
          if (classList.contains('X')) {
            classList.add('playerX-light');
          } else {
            classList.add('playerO-light');
          }
        });
      }
    },
    resetUI() {
      selectors.gameOverEl.style.display = 'none';
      selectors.boxesEl.forEach((el, id) => (el.className = `box box-${id}`));
    }
  };
};
