# Map data structure

`Map` is a built-in data structure in JavaScript that allows you to store key-value pairs and iterate over them in insertion order. It provides a more flexible alternative to objects for storing and manipulating data, especially when keys are not limited to strings or when you need to preserve the order of insertion.

### Syntax

```javascript
const myMap = new Map();
```

### Key Features

1. **Flexible Keys**: Unlike objects, `Map` allows keys of any type, including objects, functions, and primitive values.

2. **Order Preservation**: `Map` maintains the order of key-value pairs, making it suitable for scenarios where the order of insertion matters.

3. **Iterability**: `Map` provides built-in methods for iterating over its elements, such as `forEach`, `entries`, `keys`, and `values`.

4. **Size**: `Map` instances have a `size` property that reflects the number of key-value pairs they contain.

5. **Efficient for Frequent Updates**: `Map` is more efficient than objects for scenarios involving frequent additions or removals of key-value pairs.

### Examples

#### Example 1: Basic Usage

```javascript
const myMap = new Map();

// Adding key-value pairs
myMap.set("key1", "value1");
myMap.set("key2", "value2");

// Retrieving values
console.log(myMap.get("key1")); // Output: value1

// Iterating over entries
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

#### Example 2: Using Objects as Keys

```javascript
const obj1 = { id: 1 };
const obj2 = { id: 2 };

const myMap = new Map();

myMap.set(obj1, "value1");
myMap.set(obj2, "value2");

console.log(myMap.get(obj1)); // Output: value1
```

#### Example 3: Iteration Methods

```javascript
const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

// Using entries()
for (const [key, value] of myMap.entries()) {
  console.log(`${key}: ${value}`);
}

// Using keys()
for (const key of myMap.keys()) {
  console.log(key);
}

// Using values()
for (const value of myMap.values()) {
  console.log(value);
}
```

#### Example 4: Size Property

```javascript
const myMap = new Map();

myMap.set("key1", "value1");
myMap.set("key2", "value2");

console.log(myMap.size); // Output: 2
```

#### Example 5: Removing Entries

```javascript
const myMap = new Map();

myMap.set("key1", "value1");
myMap.set("key2", "value2");

myMap.delete("key1");

console.log(myMap.get("key1")); // Output: undefined
```

### Notes

- Use `Map` when you need to store key-value pairs in insertion order or when keys are not limited to strings.
- `Map` is commonly used for maintaining a collection of unique items or for scenarios where key ordering matters.
- Be aware of the potential performance trade-offs when choosing between objects and `Map` based on your specific use case.
