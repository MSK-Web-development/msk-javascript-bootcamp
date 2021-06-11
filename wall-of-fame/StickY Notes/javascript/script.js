// localStorage.clear();

// for PWA web-app
if ("serviceWorker" in navigator) {
  // register service worker
  // navigator means browser
  navigator.serviceWorker.register("service-worker.js");
}

// CREATE A NOTE
notesCount = 0;
let count = localStorage.getItem("count");
if (!count) {
  window.localStorage.setItem("count", 0);
}

for (let i = count; i >= 0; i--) {
  //   console.log(localStorage.key(i));
  let noteTitle = localStorage.key(i);
  console.log("$", i, noteTitle);
  console.log("noteTitle type: ", typeof noteTitle);
  if (noteTitle != "count" && noteTitle != "undefined" && noteTitle != null) {
    // let note = document.getElementById(id);
    let noteBody = localStorage.getItem(noteTitle);
    createNode(noteTitle, noteBody);
    console.log("noteTitle: ", noteTitle, " : ", "noteBody: ", noteBody);
  } else {
    console.log("woah!");
  }
}

// for (let i = 0; i <= count; i++) {
//   //   console.log(localStorage.key(i));
//   let id = localStorage.key(i);
//   console.log("id: ", id);
//   if (id != "count") {
//     // let note = document.getElementById(id);
//     let note = localStorage.getItem(id);
//     console.log("note: ", note);
//     let anchorsChildren = Array.prototype.slice.call(note.children[0].children);
//     noteTitle = anchorsChildren[0].innerText;
//     noteBody = anchorsChildren[2].innerText;
//     console.log("noteTitle: ", noteTitle, " : ", "noteBody: ", noteBody);
//   } else {
//     console.log("woah!");
//   }
// }

// ul.innerHTML = localStorage.getItem("key");

// var itemList = document.getElementById("notes");
var itemList = document.querySelector("li");
// console.log(itemList);
if (itemList !== null) {
  itemList.addEventListener("click", deleteNote);
}

function createNode(title, noteBody) {
  notesCount += 1;
  localStorage.setItem("count", notesCount);
  document.querySelector("#no-notes").classList.add("hidden");

  //   console.log(title);

  let li = document.createElement("li");
  let anchor = document.createElement("a");
  anchor.setAttribute("href", "#");

  let h2 = document.createElement("h2");
  h2.innerText = title;
  h2.id = "notesTitle";

  let button = document.createElement("button");
  button.className = "delete";
  //   console.log("note-" + notesCount);
  button.id = "note-" + notesCount;
  button.innerText = "X";

  let p = document.createElement("p");
  p.innerText = noteBody;

  anchor.append(h2);
  anchor.append(button);
  anchor.append(p);

  li.append(anchor);
  //   localStorage.setItem("note-" + notesCount, li);
  localStorage.setItem(title, noteBody);

  let ul = document.querySelector("#notes");
  ul.append(li);

  noNotes = document.querySelector("#no-notes");
  noNotes.style.display = "none";

  inputs = document.querySelectorAll(".inputText");
  inputs.forEach((node) => {
    // empyting imput fields
    node.value = "";
  });

  deleteNote(button);
  //   localStorage.removeItem("key");
}

// DELETE A NOTE
function deleteNote(button) {
  // adding delete event listener
  let anchorParent = button.parentElement;
  let liParent = anchorParent.parentElement;
  let ulParent = liParent.parentElement;
  button.addEventListener("click", () => {
    console.log("clicked");
    if (confirm("Are you sure?")) {
      ulParent.removeChild(liParent);
      var itemList = document.getElementById("notes");

      // removing from local storage
      let titleTag = button.parentElement.children[0];
      let noteTitle = titleTag.innerText;
      console.log("->", button.parentElement.children[0], noteTitle);
      localStorage.removeItem(noteTitle);

      //   localStorage.removeItem("note-" + notesCount);
      notesCount -= 1;
      //   localStorage.setItem("count", notesCount);

      var children = itemList.children;
      var arr = Array.prototype.slice.call(children);
      console.log("yay..", arr.length);
      if (arr.length == 0) {
        let temp = document.getElementById("no-notes");
        temp.style = "";
        temp.style.color = "white";
      }
    }
  });
}

// creating note
let btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault(); // to stop reload after submitting
  let title = document.querySelector("#new-note-title-input").value;
  let noteBody = document.querySelector("#new-note-body-input").value;
  while (localStorage.getItem(title)) {
    title += " - 1";
  }
  createNode(title, noteBody);
});
