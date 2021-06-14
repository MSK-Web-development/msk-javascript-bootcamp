// Event-Bubbling

const main = document.querySelector("#parent");
const div = document.querySelector("#child");
const p = document.querySelector("#grand-child");

const whoAmI = (event, text) => {
  alert(text);

  // event.target = the element/event which we clicked
  // event.currentTarget = the element/event which is currently executed
  console.log(
    "I Clicked: <" +
      event.target.tagName +
      ">. I am Current Executed Event: <" +
      event.currentTarget.tagName +
      ">"
  );
};

main.addEventListener("click", (event) => whoAmI(event, "I am Main Tag"));
div.addEventListener("click", (event) => whoAmI(event, "I am Div Tag"));
p.addEventListener("click", (event) => whoAmI(event, "I am P Tag"));
