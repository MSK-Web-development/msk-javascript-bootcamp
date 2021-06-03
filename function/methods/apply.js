let obj1 = {
  name: "Manoj",
};

let obj2 = {
  name: "Satish",
};

function printName(college, place) {
  console.log(this.name + " from " + college + "," + place);
}

printName.apply(obj1, ["BITM", "Bellary"]);
