const backdrop = document.querySelector("#backdrop");
const modal = document.querySelector("#modal");
const form = document.querySelector("#form");
const what = document.querySelector("#what");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");

const openModal = document.querySelector("#open");

openModal.addEventListener("click", () => {
  backdrop.style.display = "flex";
  what.textContent = "Clicked:";
});

backdrop.addEventListener("click", () => {
  console.log(
    "I Clicked: " +
      event.target.id +
      ". I am Current Executed Event: " +
      event.currentTarget.id
  );
  backdrop.style.display = "none";
});

modal.addEventListener("click", (event) => {
  event.stopPropagation(); // this will not propagate click event to backdrop
  console.log(
    "I Clicked: " +
      event.target.id +
      ". I am Current Executed Event: " +
      event.currentTarget.id
  );
});

submit.addEventListener("click", (event) => {
  //   without event.stopPropagation() on this event/element then it will be bubbled up to the parent i.e. modal
  //   event.stopPropagation(); // using it here will not let bubble up the event
  console.log(
    "I Clicked: " +
      event.target.id +
      ". I am Current Executed Event: " +
      event.currentTarget.id
  );
  what.textContent = "Clicked: Submit";
});

reset.addEventListener("click", (event) => {
  //   event.stopPropagation();
  console.log(
    "I Clicked: " +
      event.target.id +
      ". I am Current Executed Event: " +
      event.currentTarget.id
  );
  what.textContent = "Clicked: Reset";
});
