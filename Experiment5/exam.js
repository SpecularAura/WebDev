// Constructor
const MyObj = function (a, b) {
    console.log("Constructor called");
    this.a = a;
    this.b = b;
    this.getName = function() {
        return this.a
    }
}

function printObj(obj) {
    for(i in obj) {
        console.log(`${i}: ${obj[i]}`);
    }
}

// var myObj = new MyObj("hi", "there");
// printObj(myObj);
var myObj = {
    a: "hi",
    b: "there",
    get getA() {
        return this.a
    },
    get getB() {
        return this.b
    },
    getAll: function() {
        return [this.getA, this.getB]
    }
}
console.log(myObj.getA)
console.log(myObj.getB)
console.log(myObj.getAll())