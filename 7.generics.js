"use strict";
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Raj").length);
console.log(echo(26).length); //(length property is valid) Result : Undefined  => Ide doesn't know which type of data userObj is passing
console.log(echo({ "Name": "Sonu", "age": 22 }).length);
// Powerful Generic
function powerEcho(data) {
    return data;
}
console.log(powerEcho("Ramu").length);
// console.log(powerEcho(26).length);  /* 'Compile time error' bcz compiler know exactly which type of data is passed */
console.log(powerEcho({ "Name": "Sonu", "age": 22 }));
console.log(powerEcho(100)); //also valid
// Built-in Generics
var test_res = [2, 1.68, 5.6];
// test_res.push("ABC");  //compile time error bcz test_res is of number type
test_res.push(1.2); //valid
console.log(test_res);
// Arrays
function printAll(args) {
    args.forEach(function (element) {
        console.log(element);
    });
}
printAll(["Banana", "Apple"]);
// Generic Type
var echo2 = powerEcho;
console.log(echo2("Hello! User.."));
// Generic class
var SimpleMath = /** @class */ (function () {
    function SimpleMath(val1, val2) {
        this.baseValue = val1;
        this.multiplyValue = val2;
    }
    SimpleMath.prototype.calculate = function () {
        return this.baseValue * +this.multiplyValue; // '+' is used to make a string to number
    };
    return SimpleMath;
}());
var math = new SimpleMath(20, "50");
console.log(math.calculate());
