// INITIALIZATION
let student = {
  t: "114",
  firstName: "Anshul",
  lastName: "Gautam",
  greet: function () {
    return "Hi";
  },
};
console.log(student.firstName);
console.log(student.greet());

// CONSTRUCTOR
let myLaptop = new Object();
myLaptop.brand = "Apple";
myLaptop.cores = 8;
myLaptop.storage = 512;
console.log("My laptop's brand: " + myLaptop.brand);

//  OBJECT.CREATE()
const occupation = {
  type: "none",
  displayType: function () {
    console.log(this.type);
  },
};

let police = Object.create(occupation);
police.type = "police";
police.displayType();

// OBJECT.ASSIGN()

// 1) Cloning
student = {
  name: "anshul",
  age: "22",
};
let tutor = { a: 5 };
tutor = Object.assign({}, student); // target is {} -> empty object
console.log(tutor);

// 2) Appending
student = {
  name: "anshul",
  age: "22",
};
let skills = {
  languages: "Python, Java, JS",
  experience: "12",
};
student = Object.assign({}, student, skills);
console.log(student);

// DELETE AN OBJECT'S PROPERTY
delete student.experience;
console.log(student);

// COMPARISION OPERATORS '==' & '==='

// 1) Variables
let a = 1;
let b = 1;
console.log(a == b);
console.log(a === b);

// 2) Objects
let obj1 = new Object();
obj1.name = "rambo";
let obj2 = new Object();
obj2.name = "rambo";
console.log(obj1 == obj2);
console.log(obj1 === obj2);

let obj3 = new Object();
obj3.name = "Shiv";
let obj4 = obj3; // same memory location
console.log(obj4);
obj3.name = "bazinga";
console.log(Object.is(obj3, obj4)); // check memory address

// OBJECT DESTRUCTURING
student = new Object();
student.name = "rambo";
student.age = 21;

let { age } = student;
console.log("Age is: ", age);

// set timeout

let foo = () => {
  console.log("yo");
};

setInterval(foo, 3000); // till infinity
setTimeout(foo, 3000); // only once