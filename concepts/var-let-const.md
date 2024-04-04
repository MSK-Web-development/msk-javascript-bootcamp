# **var**
	
* create variables that are limited to `function scope`

* variables once assigned can be reassigned with different values

* variables with var declaration are hoisted to the top of function definition & assigned `undefined` till its actual initialization

```
if (true) {
  console.log(age); // undefined
  var age = 25;
}
age = 26; // since var is not block scoped, can access & reassign variables from the block
console.log(age); // 26

```

# **let**

* create variables that are `block scoped` (if-else, loops etc.)

* we can reassign the existing let variable to any value

* variables with let declaration are hoisted to the top of function definition and assigned as `undefined`

* However, javascript engine cannot use it till the initialization which is called `temporal dead zone`

* let variables in the block are garbage collected after execution of that block, so we can't access them outside the block

```
if (true) {
  console.log(age); // ReferenceError: Cannot access 'age' before initialization
  let age = 25;
}
console.log(age); // ReferenceError: age is not defined

```

# **const**

* create constant variables which are `block scoped`

* const variables are needed to be initialized at the time of declaration

* cannot reassign const variables after creating them

* However objects and arrays declared with const can be mutated, i.e. values in them can be reassigned but not the entire object or array

* const variables in the block are also garbage collected after execution of that block & cannot be accessed outside the block

```
const age = 25;
age = 26; // cannot reassign to const variable
```