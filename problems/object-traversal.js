
// ✅ Object Traversal in javascript
// 🤙 We will traverse this horse object and its methods 
const horse = {
    color: "Black",
    name: "Razor",
    behaviour: {
        actionTypes: {
            moveMethods: ["twist", "Jump", "Run"],
            twistAction() {
                console.log("Moved now");

            },
            jumpAction() {
                console.log("Jumped now");

            }
        },
        mood: "angry",
        ears: "closed"

    }
}

// 💻 Method to traverse the horse object
// We will use the 💡for...in loop
const traverseObj = (horse) => {
    for (let prop in horse) {
        if (typeof horse[prop] === 'object') {
            traverseObj(horse[prop])
        } else if (typeof horse[prop] === 'function') {
            horse[prop]();
        }
        else {
            console.log(horse[prop]);

        }
    }
}

traverseObj(horse);

// --------------------------------------------
// 🍎Output
// --------------------------------------------
// Black ​​​​​
// Razor
// twist ​​​​​​
// Jump 
// Run ​​​​​
// Moved 
// Jumped 
// angry ​​​​​
// closed ​​​​​
// --------------------------------------------

// -----------------------------
// 🌏 MSK | Web development
// 👨‍💻 Author - Manoj Satishkumar
// -----------------------------
// ❤ You should enjoy coding
// -----------------------------