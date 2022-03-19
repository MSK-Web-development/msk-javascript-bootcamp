class Person {
    species = 'human'; // Way1:Defining a Property
    static gender = "male"; // Can be accessed without instantiating an object

    constructor(name){
        this.name = name; // Way2: Defining a Property
    }

    // Way 1: Declaring a function property
    printName(){ 
        console.log(this.name)
    }

    // Way 2: Declaring a function property
    printSpecies = function(){
        console.log(this.species)
    }
}


//* TESTING
const person = new Person('Manoj')

console.log(person.name) // Manoj
console.log(person.species) // human
person.printName(); // Manoj
person.printSpecies(); // human

