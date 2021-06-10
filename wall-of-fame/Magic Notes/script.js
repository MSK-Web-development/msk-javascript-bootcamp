// console.log('MagicNotes')
showNotes();

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes != null) {
        notesObj = JSON.parse(notes);
    } else {
        notesObj = [];
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes != null) {
        notesObj = JSON.parse(notes);
    } else {
        notesObj = [];
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `<div class="noteCard card" id="noteCardId" style="width: 18rem; margin-bottom: 50px">
        <div class="card-body">
          <h5 class="card-title">Title: ${element.title}</h5>
          
          <p class="card-text">${element.text}</p>
          <button type="button" class = "btn btn-danger" href="#" id="${index}"onclick="deleteNotes(this.id)" class="card-link" >Delete Note</button>
          <button type="button" class = "btn btn-success" href="#" id="${index}"onclick="markNotes(this.id)"class="card-link">Bookmark</button>
        </div>
      </div>`;

    });
    let notesElem = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    } else {
       
        notesElem.innerHTML = ` <span style='margin-left: 500px; color:red'>Please add a note by clicking "ADD NOTE"</span>`;
    }
}

function deleteNotes(delNote) {
    let notes = localStorage.getItem("notes");
    if (notes != null) {
        notesObj = JSON.parse(notes);
    } else {
        notesObj = [];
    }
    notesObj.splice(delNote, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

function markNotes(markNt) {
    let notes = localStorage.getItem("notes");
    if (notes != null) {
        notesObj = JSON.parse(notes);
    } else {
        notesObj = [];
    }
    // noteStyl = document.getElementsByClassName('noteCard')[markNt];
    noteStyl = document.querySelectorAll('.noteCard')[markNt];
    noteStyl.style.backgroundColor = "#12B0E8";
    // console.log("sanu")
    localStorage.setItem("notes", JSON.stringify(notesObj));

}

let searchText = document.getElementById('searchTxt'); +
searchText.addEventListener("input", function(txt) {

    let inputVal = searchText.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})
let searchTitle = document.getElementById('searchTitle'); +
searchTitle.addEventListener("input", function(title) {

    let inputValTitle = searchTitle.value.toLowerCase();
    let noteCardsTitle = document.getElementsByClassName('noteCard');
    Array.from(noteCardsTitle).forEach(function(element) {
        let cardTitle = element.getElementsByTagName("h5")[0].innerText;
        if (cardTitle.includes(inputValTitle)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        // console.log(cardTitle);
    })
})