
# Note: 
- These metrics applies only to large array/objects which v8 does not "entirely optimise out".
- There can be very isolated optimised performance cases for array/object size less then an arbitrary size (24?).
- These wonderful performance results are not shared across browsers, especially *cough* IE.

# Fast
- Array push / pop / shift > Object equivalent [20x]
- shift < pop [6x]
- shift > Object equivalent [100x]
- arr.push > arr[index] [10x - 20x]
- arr.unshift() < new prop adding [5x]
- Nulling array value > deleting it [4x]
- Nulling obj value < deleting it [2x]
- Array.splice(index,1,data) > Array.splice(0,1,data) [100x]
- V8 array writes > V8 array reads [ 🎉 surprise]

 
# Slow
- Object value assignment
- Array.splice(index,0,data) is slow
