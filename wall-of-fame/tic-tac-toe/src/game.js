const MATCHES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const PC_CHOICE = 'X';
const USER_CHOICE = PC_CHOICE === 'X' ? 'O' : 'X';

// Game Ctrl
const GameCtrl = function () {
  // Game State
  let availableChoices = Array(9).fill(0).map((_, i) => i);
  const playerChoices = {
    X: [],
    O: []
  };
  let activeTurn = PC_CHOICE;
  let gameType = "single" // single or multiple

  function checkForMatches() {
    const { X: xChoices, O: oChoices } = playerChoices;

    for (match of MATCHES) {
      const xMatch = match.every(mEl => xChoices.includes(mEl));
      const oMatch = match.every(mEl => oChoices.includes(mEl));

      if (xMatch || oMatch) {
        return { xWon: xMatch, oWon: oMatch, match };
      }
    }

    return { xWon: false, oWon: false };
  }

  function getNextProbableMove(choices) {
    // based on player 2 choices, give remaining choice
    // arr = [2, 4] => return 6 ([2,4,6])
    for (matchArr of MATCHES) {
      let existArr = []; //[7,8]
      let notExistArr = []; //[6]
      for (let i = 0; i < matchArr.length; i++) {
        if (choices.includes(matchArr[i])) {
          existArr.push(matchArr[i])
        } else {
          notExistArr.push(matchArr[i])
        }
      }
      if (notExistArr.length === 1 && availableChoices.includes(notExistArr[0])) {
        return notExistArr[0];
      }
    }
  }


  return {
    getGameState() {
      return { availableChoices, activeTurn, gameType };
    },
    storeGameType(type) {
      gameType = type === '1' ? 'single' : 'multiple';
    },
    play(selectedBox) {
      // console.log(`${activeTurn} selected ${selectedBox}`)
      playerChoices[activeTurn].push(selectedBox);
      availableChoices = availableChoices.filter(choice => selectedBox !== choice);

      // Check if atleast 1 player selected atleast 3 boxes
      if (playerChoices.O.length >= 3 || playerChoices.X.length >= 3) {
        // check for combinations

        const { xWon, oWon, match = [] } = checkForMatches();
        if (xWon || oWon) {
          // game over => activeTurn won
          availableChoices = [];
          console.clear();
          console.log(`%c Player ${activeTurn} Won!!`, 'background: #102; color: #f4f4f4; padding: 0.5rem 1rem 0.5rem');
          return { playerWon: xWon ? 'X' : 'O', match };
        }
      }

      // Continue to next turn
      activeTurn = activeTurn === 'X' ? 'O' : 'X';

      // Game Over
      if (availableChoices.length === 0) {
        console.clear();
        console.log(`%c That's a Tie!!`, 'background: red; color: #f4f4f4; padding: 0.5rem 1rem 0.5rem');
        return { playerWon: 'draw' };
      }
    },
    checkForNextMove() {
      if (playerChoices[PC_CHOICE].length > 1) {
        // console.log('PC played twice', playerChoices[PC_CHOICE])
        const nextWinMove = getNextProbableMove(playerChoices[PC_CHOICE])
        if (nextWinMove) {
          return nextWinMove;
        }
        if (playerChoices[USER_CHOICE].length > 1) {
          // console.log('User played twice', playerChoices[USER_CHOICE])
          const nextSafeMove = getNextProbableMove(playerChoices[USER_CHOICE])
          return nextSafeMove;
        }
      }
    },
    restartGame() {
      availableChoices = Array(9)
        .fill(0)
        .map((_, i) => i);
      activeTurn = PC_CHOICE;
      playerChoices.X = [];
      playerChoices.O = [];
      console.clear()
    }
  };
};
