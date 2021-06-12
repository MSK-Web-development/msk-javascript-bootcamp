// Link footer to GitHub
document.querySelector("#footer").addEventListener("click", (event) => {
  window.open("https://github.com/mochatek", "_blank");
});

// DOM element reference
const personName = document.querySelector("#personName");
const teamA = document.querySelector("#teamA");
const teamB = document.querySelector("#teamB");
const scoreboard = document.querySelector("#scoreboard");
const matchDetails = document.querySelector("#matchDetails");
const events = document.querySelector("#events");
const ballHistory = document.querySelector("#ballHistory");
const totalOvers = document.querySelector("#totalOvers");
const overs = document.querySelector("#overs");

const modal = new bootstrap.Modal(document.querySelector("#modal"), {
  backdrop: "static",
  keyboard: false,
});
const question = document.querySelector("#question");
const selections = document.querySelector("#selections");
let confirm = document.querySelector("#confirm");

// Globals
let selectedTeam = teamA;
let match = null;
const persons = [];
let scoreSummary = null; // Table with dom elements {Total, Wickets, Overs} for both teams

// End currrent Match
function endMatch() {
  toggleEvents();
  scoreboard.innerHTML = "";
  matchDetails.style.display = "";
  selections.innerHTML = "";
  match = null;
  delete match;
}

/* ======================================================================================================= */

// Player blueprint
class Player {
  constructor(ind, name) {
    this.id = ind;
    this.name = name;
    this.bat = {
      runs: 0,
      balls: 0,
      fours: 0,
      sixes: 0,
      out: false,
    };
    this.bowl = {
      overs: 0, // Stores number of balls. Converted into overs when writing to DOM
      runs: 0,
      wickets: 0,
    };
  }

  // Bowling [extraRuns in case of Wd,N,W]
  throwBall(event, extraRuns = 0) {
    if (["Wd", "N"].includes(event)) {
      // Extras
      this.bowl.runs += 1 + extraRuns;
    } else if (event == "W") {
      //Wicket
      this.bowl.overs += 1;
      this.bowl.wickets += 1;
      this.bowl.runs += extraRuns;
    } else {
      // Hit for runs
      this.bowl.overs += 1;
      this.bowl.runs += event;
    }

    // Update bowler stats in DOM
    const row = document.querySelector(`#${this.name}-bowl`).children;
    row[1].innerText = `${Math.floor(this.bowl.overs / 6)}.${
      this.bowl.overs % 6
    }`; // Convert balls to overs
    row[2].innerText = this.bowl.runs;
    row[3].innerText = this.bowl.wickets;
  }

  // Batting [countBall = false if Wd,W,N]
  hitBall(event, countBall = true) {
    // Update faced ball only if specified
    if (countBall) {
      this.bat.balls += 1;
    }

    if (event == "W") {
      // Wicket
      this.bat.out = true;
    } else {
      // Score runs
      this.bat.runs += event;

      if (event == 4) {
        // Boundary count
        this.bat.fours += 1;
      } else if (event == 6) {
        this.bat.sixes += 1;
      }
    }

    // Update batter stats in DOM
    const row = document.querySelector(`#${this.name}-bat`).children;
    row[1].innerText = this.bat.runs;
    row[2].innerText = this.bat.balls;
    row[3].innerText = `${this.bat.fours}/${this.bat.sixes}`;
  }
}

/* ======================================================================================================= */

// Cricket Match
class Cricket {
  constructor(teamA, teamB) {
    this.teamA = {
      id: "teamA",
      name: "teamA",
      total: 0,
      wickets: 0,
      overs: 0,
      players: [],
      order: null,
    };
    Array.from(teamA.children).forEach((player, ind) => {
      this.teamA.players.push(new Player(ind, player.id));
    });

    this.teamB = {
      id: "teamB",
      name: "teamB",
      total: 0,
      wickets: 0,
      overs: 0,
      players: [],
      order: null,
    };
    Array.from(teamB.children).forEach((player, ind) => {
      this.teamB.players.push(new Player(ind, player.id));
    });

    this.battingTeam = null;
    this.bowlingTeam = null;
    this.striker = null;
    this.nonStriker = null;
    this.bowler = null;
    this.totalOvers = +totalOvers.value; // Total overs for the match
  }

  // Decide first batting
  toss(firstBatting) {
    // If first batting is not pre-decided, do the toss
    if (!firstBatting) {
      const tossWon = Math.random() > 0.5 ? 0 : 1; // 50% probability

      // Choose batting and bowling team
      if (tossWon) {
        this.teamA.order = "bat";
        this.teamB.order = "chase";

        this.battingTeam = this.teamA;
        this.bowlingTeam = this.teamB;
      } else {
        this.teamA.order = "chase";
        this.teamB.order = "bat";

        this.battingTeam = this.teamB;
        this.bowlingTeam = this.teamA;
      }

      //  If first batting was already decided
    } else {
      if (firstBatting == "teamA") {
        this.teamA.order = "bat";
        this.teamB.order = "chase";

        this.battingTeam = this.teamA;
        this.bowlingTeam = this.teamB;
      } else {
        this.teamA.order = "chase";
        this.teamB.order = "bat";

        this.battingTeam = this.teamB;
        this.bowlingTeam = this.teamA;
      }
    }
  }

  // Set opening batsmen and bowler
  async initializeInnings() {
    // Reset ball history
    ballHistory.innerHTML = "";

    await this.setStriker();
    await this.setNonStriker();
    await this.setBowler();
    modal.hide();
  }

  // Set new striker
  async setStriker() {
    // Deactivate previous striker from DOM if present
    if (this.striker) {
      const row = document.querySelector(`#${this.striker.name}-bat`);
      row.classList.remove("border-success");
      row.children[0].innerText = this.striker.name;
    }

    // Get players eligible to bat
    const players = this.battingTeam.players
      .filter(
        (player) =>
          !player.bat.out &&
          player.id != this.nonStriker?.id &&
          player.id != this.striker?.id
      )
      .map((player) => player.name);

    // If any player left to bat
    if (players.length) {
      let striker = null;

      // If more than one player
      if (players.length > 1) {
        striker = await getPrompt("Choose Striker ?", players);

        // If only one player left to bat, then select him for strike
      } else {
        striker = players[0];
      }

      // Set selected player to be the striker
      this.striker = this.battingTeam.players.filter(
        (player) => player.name == striker
      )[0];

      // Update current striker in DOM
      const row = document.querySelector(`#${this.striker.name}-bat`);
      row.classList.add("border-success");
      row.children[0].innerText = `🏏 ${this.striker.name}`;

      // No one else left to bat, that is, only non-striker is left
    } else {
      this.rotate(); // Let non-striker come to striker's end

      // Remove non-striker (One-Man batting)
      document
        .querySelector(`#${this.nonStriker.name}-bat`)
        .classList.remove("border-warning");
      this.nonStriker = null;
    }
  }

  // Set new non-striker
  async setNonStriker() {
    // Deactivate previous non-striker from DOM if present
    if (this.nonStriker) {
      const row = document.querySelector(`#${this.nonStriker.name}-bat`);
      row.classList.remove("border-warning");
      row.children[0].innerText = this.nonStriker.name;
    }

    // Get players eligible to bat
    const players = this.battingTeam.players
      .filter(
        (player) =>
          !player.bat.out &&
          player.id != this.nonStriker?.id &&
          player.id != this.striker?.id
      )
      .map((player) => player.name);

    // If any player left to bat
    if (players.length) {
      let nonStriker = null;

      // If more than one player
      if (players.length > 1) {
        nonStriker = await getPrompt("Choose Non-Striker ?", players);

        // If only one player left to bat, then select him for non-strike
      } else {
        nonStriker = players[0];
      }

      // Set selected player to be the non-striker
      this.nonStriker = this.battingTeam.players.filter(
        (player) => player.name == nonStriker
      )[0];

      // Update current non-striker in DOM
      const row = document.querySelector(`#${this.nonStriker.name}-bat`);
      row.classList.add("border-warning");
      row.children[0].innerText = this.nonStriker.name;

      // No one else left to bat, that is, only striker is left
    } else {
      // Remove non-striker (One-Man batting)
      document
        .querySelector(`#${this.nonStriker.name}-bat`)
        .classList.remove("border-warning");
      this.nonStriker = null;
    }
  }

  // Set new bowler
  async setBowler() {
    // Deactivate previous bowler from DOM if present
    if (this.bowler) {
      const row = document.querySelector(`#${this.bowler.name}-bowl`);
      row.classList.remove("border-danger");
      row.children[0].innerText = this.bowler.name;
    }

    // Get eligible bowlers
    const players = this.bowlingTeam.players
      .filter((player) => player.id != this.bowler?.id)
      .map((player) => player.name);

    // If any player eligible to bowl
    if (players.length) {
      let bowler = null;

      // If more than one player
      if (players.length > 1) {
        bowler = await getPrompt("Choose Bowler ?", players);

        // If only one player eligible to bowl, then select him for bowling
      } else {
        bowler = players[0];
      }

      // Set the selected bowler to be the active bowler
      this.bowler = this.bowlingTeam.players.filter(
        (player) => player.name == bowler
      )[0];

      // Update current bowler in DOM
      const row = document.querySelector(`#${this.bowler.name}-bowl`);
      row.classList.add("border-danger");
      row.children[0].innerText = `🥎 ${this.bowler.name}`;
    }
  }

  // Rotate strike
  rotate() {
    // Rotate strike only if there are players at both ends
    if (this.striker && this.nonStriker) {
      [this.striker, this.nonStriker] = [this.nonStriker, this.striker]; // Swap players

      // Update strike rotation in DOM
      const striker = document.querySelector(`#${this.striker.name}-bat`);
      const nonStriker = document.querySelector(`#${this.nonStriker.name}-bat`);
      striker.className = "border-success";
      nonStriker.className = "border-warning";
      striker.children[0].innerText = `🏏 ${this.striker.name}`;
      nonStriker.children[0].innerText = this.nonStriker.name;
    }
  }

  // Game event handler
  async handleEvent(event) {
    let outcome = null;

    event = isNaN(+event) ? event : +event; // Convert runs to numbers

    // In case we need to rotate strike
    if (event == "Ro") {
      match.rotate();
      return;

      // In case of wicket
    } else if (event == "W") {
      this.battingTeam.wickets += 1;
      this.battingTeam.overs += 1;

      // If it was run out, then get the runs made and update the scores
      const runs = +(await getPrompt("Runs made if Run-Out ?", [0, 1, 2, 3]));
      this.battingTeam.total += runs;
      this.striker.hitBall(runs);
      this.bowler.throwBall(event, runs);

      // Show additional runs made in history and add runs to bowler, if any
      if (runs) {
        event = `${event}+${runs}`;
      }

      // If it is not one-man batting
      if (this.nonStriker) {
        const wicket = await getPrompt("Who got Out?", [
          this.striker.name,
          this.nonStriker.name,
        ]);

        // If striker was out
        if (wicket == this.striker.name) {
          this.striker.hitBall("W", false); // Let him out
          await this.setStriker(); // Get new player to strike

          // If non-striker was out
        } else if (wicket == this.nonStriker.name) {
          this.nonStriker.hitBall("W", false); // Let him out
          await this.setNonStriker(); // Get new player to non-strike
        }

        // If it was one-man batting, then batting team is all out
      } else {
        this.striker.hitBall("W", false);

        // Deactivate striker in DOM
        const row = document.querySelector(`#${this.striker.name}-bat`);
        row.className = "";
        row.children[0].innerText = this.striker.name;

        // If it was first batters innings, then it is the end of their innings
        if (this.battingTeam.order == "bat") {
          outcome = [null, null, "endOfInnings"];

          // If it was chasing team, find match draw or lost
        } else {
          if (this.battingTeam.total == this.bowlingTeam.total) {
            // Draw
            outcome = [null, null, "Draw"];
          } else {
            // Batting team Lost
            const margin = this.bowlingTeam.total - this.battingTeam.total;
            outcome = [this.bowlingTeam, margin, "Runs"];
          }
        }
      }

      // In case runs was scored
    } else if (!["N", "Wd", "Re"].includes(event)) {
      this.striker.hitBall(event);
      this.bowler.throwBall(event);

      this.battingTeam.total += event;
      this.battingTeam.overs += 1;

      if (event % 2 == 1) {
        // If single or three, rotate strike
        this.rotate();
      }

      // In case it was wide or no ball, award extras
    } else if (event != "Re") {
      // Additional runs made in that ball
      const runs = +(await getPrompt("Additional runs made ?", [
        0,
        1,
        2,
        3,
        4,
        6,
      ]));

      // Add ball and runs to bowler
      this.bowler.throwBall(event, runs);

      if (runs) {
        // Add runs to striker if N
        if (event == "N") {
          this.striker.hitBall(runs, false);
        }

        // Rotate strike if odd run
        if (runs % 2 == 1) {
          this.rotate();
        }

        // Update additional runs in event history
        event = `${event}+${runs}`;
      }
      this.battingTeam.total += 1 + runs;
    }

    // Update score summary of the batting team
    const team = scoreSummary[this.battingTeam.id];
    team["total"].innerText = this.battingTeam.total;
    team["wickets"].innerText = this.battingTeam.wickets;
    team["overs"].innerText = `${Math.floor(this.battingTeam.overs / 6)}.${
      this.battingTeam.overs % 6
    }`;

    // Last 10 balls event history
    if (ballHistory.childElementCount == 10) {
      ballHistory.firstElementChild.remove();
    }
    ballHistory.insertAdjacentHTML(
      "beforeend",
      `
        <span class="badge bg-secondary">${event}</span>
        `
    );

    // Check if batting team chased down the target
    if (
      this.battingTeam.total > this.bowlingTeam.total &&
      this.battingTeam.order == "chase"
    ) {
      const margin = this.battingTeam.players.length - this.battingTeam.wickets;
      outcome = [this.battingTeam, margin, "Wickets"];
    }

    // If overs completed
    if (this.battingTeam.overs == this.totalOvers * 6) {
      // If it was first batting team
      if (this.battingTeam.order == "bat") {
        // End of batting team's innings
        outcome = [null, null, "endOfInnings"];

        // If it was the chasing team, find match outcome
      } else {
        if (this.battingTeam.total == this.bowlingTeam.total) {
          // Draw
          outcome = [null, null, "Draw"];
        } else if (this.battingTeam.total < this.bowlingTeam.total) {
          // Batting team Lost
          let margin = this.bowlingTeam.total - this.battingTeam.total;
          outcome = [this.bowlingTeam, margin, "Runs"];
        } else {
          // Batting team won
          let margin =
            this.battingTeam.players.length - this.battingTeam.wickets;
          outcome = [this.battingTeam, margin, "Wickets"];
        }
      }

      // If over completed, then change bowler and rotate strike
    } else if (
      this.battingTeam.overs > 0 &&
      this.battingTeam.overs % 6 == 0 &&
      !outcome
    ) {
      await this.setBowler();
      this.rotate();
    }

    if (outcome) {
      await this.updateMatchStatus(...outcome);
    } else {
      // Close modal if open
      if (modal._isShown) {
        modal.hide();
      }
    }
  }

  // End of Innings of a team
  endInnings() {
    [this.battingTeam, this.bowlingTeam] = [this.bowlingTeam, this.battingTeam];

    this.striker = null;
    this.nonStriker = null;
    this.bowler = null;
  }

  // Update Match status: [end of innings, draw, won, lost]
  async updateMatchStatus(team, margin, status) {
    // Let other team chase
    if (status == "endOfInnings") {
      await getPrompt("End of Innings !", "end");
      this.endInnings();
      await this.initializeInnings();
      document.querySelector(`#${this.battingTeam.id}-tab`).click(); // Switch scoreboard tab

      // End game
    } else {
      let msg = "";
      if (status == "Draw") {
        msg = "Match Draw";
      } else {
        msg = `${team.name} WON by ${margin} ${status}`;
      }
      await getPrompt(msg, "win");
      endMatch();
    }
  }
}

/* ======================================================================================================= */

// People playing
class Person {
  constructor(name) {
    const person = document.createElement("p");
    person.innerText = `👲 ${name}`;
    person.id = name;
    person.className = "alert alert-info p-1 fw-bold";
    person.draggable = true;

    person.ondragstart = (event) => {
      event.dataTransfer.setData("Text", name);
    };

    person.ondrop = drop;

    return person;
  }
}

/* ======================================================================================================= */

// Drop player to team
function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("Text");

  // If droped on top of a player, then put player to corresponding team
  if (event.target.nodeName == "P") {
    event.target.parentNode.appendChild(document.querySelector(`#${data}`));

    // Drop into team
  } else {
    event.target.appendChild(document.querySelector(`#${data}`));
  }
}

function allowDrop(event) {
  event.preventDefault();
}

// Select team to add people to
function selectTeam(team) {
  selectedTeam = team;
  team.classList.add("select");

  const opponent = team == teamA ? teamB : teamA;
  if (opponent.classList.contains("select")) {
    opponent.classList.remove("select");
  }
}

// On adding people, ensure he is not already added
function addPerson() {
  const name = personName.value.trim();
  if (name && !persons.includes(name)) {
    persons.push(name);
    const person = new Person(name);
    selectedTeam.appendChild(person);
  }
  personName.value = "";
}

// Create tabs for scorecard of an innings
function createTab(battingTeam, bowlingTeam) {
  // Batting info table
  let tabContent = `
        <table class="table" border="1">
            <tr class="table-secondary">
                <th>Batter</th>
                <th>R</th>
                <th>B</th>
                <th>4/6</th>
            </tr>`;
  battingTeam.players.forEach((player) => {
    tabContent += `
        <tr id="${player.name}-bat">
            <td>${player.name}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>`;
  });

  // Bowling info table
  tabContent += `</table>
            <br>
            <table class="table" border="1">
            <tr class="table-secondary">
                <th>Bowler</th>
                <th>O</th>
                <th>R</th>
                <th>W</th>
            </tr>`;
  bowlingTeam.players.forEach((player) => {
    tabContent += `
        <tr id="${player.name}-bowl">
            <td>${player.name}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>`;
  });

  // Scorecard summary
  tabContent += `</table>
        <p class="alert alert-warning p-1 text-center fw-bolder">Total: &nbsp;
            <span id="${battingTeam.id}-total" class="text-primary">0</span>
            / <span id="${battingTeam.id}-wickets" class="text-danger">0</span>
            &nbsp;Overs: <span id="${battingTeam.id}-overs" class="text-success">0.0</span>&nbsp;(${match.totalOvers})
        </p>`;

  return tabContent;
}

// Create and add Scoreboard for both teams in DOM
function generateScoreBoard() {
  const tabs = `<p class="alert alert-info small text-center p-0 mt-2 mb-0">🛈 Click team name to Edit</p>
  <div class="pt-2">
        <ul class="nav nav-tabs nav-justified mb-3" id="scoreTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active fw-bolder"
                    id="${match.battingTeam.id}-tab"
                    data-bs-toggle="tab" href="#${match.battingTeam.id}-content"
                    role="tab"
                    aria-controls="${match.battingTeam.id}-content"
                    aria-selected="true"
                    contenteditable="true">
                    ${match.battingTeam.name}
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link fw-bolder"
                    id="${match.bowlingTeam.id}-tab"
                    data-bs-toggle="tab" href="#${match.bowlingTeam.id}-content"
                    role="tab"
                    aria-controls="${match.bowlingTeam.id}-content"
                    aria-selected="true"
                    contenteditable="true">
                    ${match.bowlingTeam.name}
                </a>
            </li>
        </ul>

        <div class="tab-content" id="scoreTabContent">
            <div class="tab-pane fade show active"
                id="${match.battingTeam.id}-content"
                role="tabpanel"
                aria-labelledby="${match.battingTeam.id}-tab">
                ${createTab(match.battingTeam, match.bowlingTeam)}
            </div>
            <div class="tab-pane fade"
                id="${match.bowlingTeam.id}-content"
                role="tabpanel"
                aria-labelledby="${match.bowlingTeam.id}-tab">
                ${createTab(match.bowlingTeam, match.battingTeam)}
            </div>
        </div>
    </div>`;

  matchDetails.style.display = "none"; // Hide details div
  scoreboard.insertAdjacentHTML("beforeend", tabs);

  // Add event listeners for team name changes
  document.querySelectorAll("a.nav-link.fw-bolder").forEach((tab) => {
    tab.addEventListener("input", (event) => {
      const team = event.target.getAttribute("id").replace("-tab", "");
      const name = event.target.textContent.trim()
        ? event.target.textContent
        : team;
      event.target.textContent = name;
      match[team].name = name;
    });
  });
}

// Toggle display of event-grid
function toggleEvents() {
  events.style.display = events.style.display == "none" ? "" : "none";
}

// Recieve event from DOM and pass it to match handler
function sendEvent(event) {
  const element = event.target;

  // If event was generated from any of the event buttons
  if (element.hasAttribute("data-event")) {
    match.handleEvent(element.getAttribute("data-event")); // send event to match handler
  }
}

// Set total overs in DOM
function setTotalOvers(value) {
  overs.innerText = value;
}

// Toss
async function toss(firstBatting = null) {
  const lengthA = teamA.childElementCount;
  const lengthB = teamB.childElementCount;

  if (lengthA < 2 || lengthB < 2) {
    alert("Add minimum 2 players to both teams to continue");
  } else {
    match = new Cricket(teamA, teamB); // Create the match
    match.toss(firstBatting); // Do the actual toss
    await startMatch(); // Proceed to match
  }
}

// Get confirmation after selecting player
function getConfirmation(options) {
  return new Promise((resolve, reject) => {
    // Remove previous listeners
    let temp = confirm.cloneNode(true);
    confirm.parentNode.replaceChild(temp, confirm);
    confirm = temp;
    delete temp;

    // Resolve confirmation in clicked confirm button
    confirm.addEventListener("click", () => {
      // If we need selections
      if (typeof options != "string") {
        // Ensure a player has been selected
        const selectedPlayer = document.querySelector(
          'input[name="options"]:checked'
        );
        if (selectedPlayer) {
          resolve(selectedPlayer.value); // Return selected player
        }

        //If game messages
      } else {
        if (options == "win") modal.hide(); // Close modal on game end
        resolve();
      }
    });
  });
}

// Set prompt-modal content and open it
function setAndOpenModal(message, options) {
  // Set propmpt message and available player options in the modal
  question.innerText = message;
  selections.innerHTML = "";
  let html = "";

  // If options is a list
  if (typeof options != "string") {
    html = '<div class="list-group">';
    options.forEach((option) => {
      html += `<input type="radio" name="options"  id="${option}" value="${option}"/>
            <label class="list-group-item" for="${option}">${option}</label>`;
    });
    html += "</div>";

    // If option is string, ie, game status messages
  } else {
    html = `<div class="text-center"><img src="res/img/${options}.gif" class="img-thumbnail"></div>`;
  }

  selections.insertAdjacentHTML("beforeend", html); // Add to DOM

  // Show modal
  if (!modal._isShown) {
    modal.show();
  }
}

// Get selection from user
async function getPrompt(message, options) {
  setAndOpenModal(message, options); // Get prompt-modal
  const selection = await getConfirmation(options); // Get selection
  return selection;
}

// Start the match
async function startMatch() {
  generateScoreBoard();
  toggleEvents();

  // Initialize DOM elements to scoreboard-summary dictionary
  scoreSummary = {
    teamA: {
      total: document.querySelector("#teamA-total"),
      wickets: document.querySelector("#teamA-wickets"),
      overs: document.querySelector("#teamA-overs"),
    },
    teamB: {
      total: document.querySelector("#teamB-total"),
      wickets: document.querySelector("#teamB-wickets"),
      overs: document.querySelector("#teamB-overs"),
    },
  };

  await match.initializeInnings(); // Initialize the innings
}
