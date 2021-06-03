// Function expression
const getFullName = function (firstName, lastName) {
  return `${firstName} ${lastName}`;
};

// Arrow Function: With return value
const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

// Arrow Function: No return value
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// Arrow Function: No parameter
const getFullName = () => console.log("Manoj");
const getFullName = _ => console.log("Manoj");

// Generator function
function* getFullName() {
  yield "Manoj";
}
