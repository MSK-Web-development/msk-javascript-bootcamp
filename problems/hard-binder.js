// Explicit hard binding.
// Let's bind the calling function to the Function's prototype itself
if (!Function.prototype.bind2) {
  Function.prototype.bind2 = function (o, args) {
    return () => {
      this.apply(o, [args]);
    }
  }
}

function foo(args) {
  console.log(this.bar);
  console.log(args);
}

var obj = {
  bar: "bar1"
}

var obj2 = {
  bar: 'bar2',
  foo: function () {
    foo.call(this)
  }
}

foo = foo.bind2(obj, ['arg1', 'arg2']);

foo();

// -----------------------------
// 👨‍💻Author - Manoj Satishkumar
// -----------------------------