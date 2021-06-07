class MySet {
    constructor(...values) {
        this.values = {};
        this.length = 0;

        this.add(...values);
    }

    _toHash(value) {
        switch (value) {
            case null: return "null";
            case undefined: return "undefined";
            case true: return "true";
            case false: return "false";
            default: switch (typeof value) {
                case "number": return ("#" + value);
                case "string": return ("*" + value);
                case "object": return ("@" + value);
            }
        }
    }

    add(...values) {
        values.forEach(value => {
            if (!this.values.hasOwnProperty(this._toHash(value))) {
                this.values[this._toHash(value)] = value;
                (this.length)++;
            }
        });

        //To Allow Method Chaining
        return this;
    }

    deleteValue = function (...values) {
        values.forEach(value => {
            let str = this._toHash(value);

            if (this.value[str]) {
                delete this.value[str];
                (this.length)--;
            }
        });

        //To allow method chaining
        return this;
    }

    has(value) {
        return this.values.hasOwnProperty(this._toHash(value));
    }

    clear() {
        this.values = {};
        this.length = 0;

        //To allow method chaining
        return this;
    }

    toArray() {
        let array = [];

        for (let i in this.values) {
            array.push(this.values[i]);
        }

        return array;
    }
}

const newSet = new MySet(1, 2, 2, 3);

console.log(newSet.toArray()); // [1, 2, 3]