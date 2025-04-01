### **JavaScript `Array.from()` Method** 🚀

The `Array.from()` method in JavaScript **creates a new array from an iterable** or an **array-like object**.

---

## **🛠 Syntax**

```javascript
Array.from(iterable, mapFunction, thisArg);
```

- **`iterable`** → The array-like or iterable object to convert.
- **`mapFunction`** _(Optional)_ → A function applied to each element before adding it to the new array.
- **`thisArg`** _(Optional)_ → Value to use as `this` inside the map function.

---

## **🧑‍💻 Examples**

### **1️⃣ Convert String to Array**

```javascript
const str = "Hello";
const arr = Array.from(str);
console.log(arr); // ['H', 'e', 'l', 'l', 'o']
```

### **2️⃣ Convert Set to Array**

```javascript
const set = new Set([1, 2, 3, 3, 4]);
const arr = Array.from(set);
console.log(arr); // [1, 2, 3, 4]
```

### **3️⃣ Convert Map Keys to Array**

```javascript
const map = new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
]);
const keys = Array.from(map.keys());
console.log(keys); // [1, 2, 3]
```

### **4️⃣ Convert NodeList to Array (DOM Example)**

```javascript
const divs = document.querySelectorAll("div");
const divArray = Array.from(divs);
console.log(divArray); // Converts NodeList to a real array
```

### **5️⃣ Using `Array.from()` with a Mapping Function**

```javascript
const numbers = Array.from([1, 2, 3], (num) => num * 2);
console.log(numbers); // [2, 4, 6]
```

### **6️⃣ Create an Array of Length `n` and Fill with Values**

```javascript
const arr = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(arr); // [1, 2, 3, 4, 5]
```

---

## **🎯 When to Use `Array.from()`?**

| **Use Case**                                     | **Why Use `Array.from()`?**         |
| ------------------------------------------------ | ----------------------------------- |
| Convert strings, sets, maps to arrays            | It works with any iterable          |
| Convert array-like objects (NodeList, arguments) | Can’t use `.map()` directly on them |
| Generate arrays dynamically                      | `{ length: n }` trick with mapping  |
| Avoid `for` loops                                | Cleaner and more readable           |

---
