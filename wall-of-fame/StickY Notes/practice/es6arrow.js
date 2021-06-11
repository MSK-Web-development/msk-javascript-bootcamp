function sum(a, b) {
  return a + b;
}

let sum2 = (a, b) => a + b;

console.log(sum(2, 5));
console.log(sum2(2, 5));

// ------------------------------- //

function isPositive(a) {
  return a >= 0;
}

let isPositive2 = (a) => a >= 0;

console.log(isPositive(-2));
console.log(isPositive2(-2));

// ANONYMOUS (No Name) FUNCTIONS
class Person {
  constructor(name) {
    this.name = name;
  }

  printNameFunction() {
    setInterval(function () {
      console.log("function...");
    }, 500);
  }

  printNameArrow() {
    setInterval(() => {
      console.log("arrow...");
    }, 900);
  }
}

let p = new Person("rambo");
p.printNameFunction();
p.printNameArrow();

for (let i = 0; i < 5; i++) {
  console.log("Hello World.");
}
