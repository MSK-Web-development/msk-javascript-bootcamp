## ECMAScript6 Class ##

Classes are templates/blueprint for creating objects which are only available in ECMAScript 6, before that we used to have a `function.prototype` and this new class syntax abstracts that helping in gapping the difference between other OOPs based languages. 

We can create classes using the syntax ` class nameOfTheClass {}`. Now, if we want to create an object then we can do so using the `new` operator.
```javascript
new Car()
```

Now, we can define different methods and properties and they are initialized using the special `constructor` method which as the name suggests constructs the object.
```javascript
class Car {
    velocity;

    constructor(velocity) {
        this->velocity = velocity;
    }
} 

//or

class Car {
    constructor(velocity) {
        this->velocity = velocity;
    }
}
```

Both of the above syntaxes are equivalent. 

Now, you may ask what is ``this``?  So, ``this`` refers to the current object being constructed. So, when you do something like `this.propertyName` then it either initializes the property or creates a new one based on the approach you took above. It behaves a little differently than most of the JavaScript language but is near to behaviour of languages such as Java or C++. To see all the use cases I strongly encourage you to look at [this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this). 

Now, defining methods is similar to defining properties since functions are themselves objects and can be assigned just like any other variable.
```javascript
class Car {
    velocity = function() {};
} 

//or

class Car {
     function velocity() {};
} 

//or

class Car {
    constructor(velocity) {
        this->velocity = function() {};
    }
}
```

Again, all of the above syntaxes are equivalent.

**Note - Methods in JavaScript classes are not bound by default. You must use a ``bind`` method to do that.**
```javascript
class SomeClass {
    constructor() {
        this.printThis = function() {
            console.log(this);
        };
    }
}

function fun(passedFunction) {
    passedFunction();
}

let obj = new SomeClass();

obj.printThis(); //Prints { printThis: function } as expected

fun(obj.printThis); //Prints ``undefined``
```

With bind,
```javascript
class SomeClass {
    constructor() {
        this.printThis = function() {
            console.log(this);
        };

        //Binds the function i.e. fixes this to the current object
        this.printThis = this.printThis.bind(this);
    }
}

function fun(passedFunction) {
    passedFunction();
}

let obj = new SomeClass();

obj.printThis(); //Prints { printThis: function } as expected

fun(obj.printThis); //Also, prints { printThis: function } as expected
```

Now, that is all you need to get started with JS classes. Now, I am going to demonstrate the use by implementing a useful object `Set`. You can read more about Set on [Wikipedia](https://en.wikipedia.org/wiki/Set_(mathematics)). The implementation is [here](./Set.js).