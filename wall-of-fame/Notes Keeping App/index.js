console.log("My Notes");
shownote();
// store to local storage
let myBtn = document.getElementById("myBtn");
let whiteBtn = document.getElementById("whiteTheame");
let blackBtn = document.getElementById("darkTheame");
let appTitle = document.getElementsByClassName("navbar-brand")[0];
let myHeading = document.getElementById("myHeading");
let yourNotes = document.getElementById("yourNotes");
let addNotes = document.getElementById("addNotes");
let hr = document.getElementsByClassName("hr");

whiteBtn.addEventListener("click", function () {
  appTitle.style.color = "black";

  hr[0].style.backgroundColor = "grey";
  hr[1].style.backgroundColor = "grey";

  whiteBtn.style.color = "black";
  whiteBtn.style.backgroundColor = "white";

  blackBtn.style.color = "black";
  blackBtn.style.backgroundColor = "white";

  myHeading.style.color = "black";
  yourNotes.style.color = "black";

  document.body.style.backgroundColor = "white";
});
blackBtn.addEventListener("click", function () {
  appTitle.style.color = "white";

  hr[0].style.backgroundColor = "white";
  hr[1].style.backgroundColor = "white";

  whiteBtn.style.color = "white";
  whiteBtn.style.backgroundColor = "black";

  blackBtn.style.color = "white";
  blackBtn.style.backgroundColor = "black";

  myHeading.style.color = "white";
  yourNotes.style.color = "white";

  document.body.style.backgroundColor = "black";
});

myBtn.addEventListener("click", function () {
  let myTitle = document.getElementById("myTitle");
  let myNotes = document.getElementById("myNotes");
  let notes = localStorage.getItem("addNotes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let cardObj = {
    title: myTitle.value,
    noteTxt: myNotes.value,
  };
  notesObj.push(cardObj);
  localStorage.setItem("addNotes", JSON.stringify(notesObj));
  myNotes.value = " ";
  myTitle.value = " ";
  console.log(notesObj);
  shownote();
});

// add the note in innerHTML
function shownote() {
  let notes = localStorage.getItem("addNotes");
  const time = new Date().toLocaleDateString();
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myCard = "";
  notesObj.forEach(function (element, index) {
    myCard += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <div class="card_titleBox">
            <h5 class="card_title ser">${element.title}</h5>
            <p class="noteTime">${time}</p>
          </div>  
            <p class="card-text ser">${element.noteTxt}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
        </div>
    </div>`;
  });
  let myText = document.getElementById("addNotes");
  if (notesObj.length != 0) {
    myText.innerHTML = myCard;
  } else {
    myText.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// function to delete a note
function deleteNote(index) {
  let notes = localStorage.getItem("addNotes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("addNotes", JSON.stringify(notesObj));
  shownote();
}

// search a note/title

let searchTxt = document.getElementById("search");
searchTxt.addEventListener("input", function (e) {
  let valTxt = searchTxt.value.toLowerCase();
  let noteCard = document.getElementsByClassName("noteCard");
  Array.from(noteCard).forEach(function (element) {
    let notePara = element.getElementsByTagName("p")[0].innerHTML;
    let noteTitle = element.getElementsByTagName("h5")[0].innerHTML;
    if (notePara.includes(valTxt) || noteTitle.includes(valTxt)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
