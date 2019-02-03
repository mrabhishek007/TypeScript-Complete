"use strict";
// let & const
console.log('let & const');
var variable = "Test";
console.log(variable);
variable = 'Test Again!';
console.log(variable);
// constant
var maxLevel = 100;
console.log(maxLevel);
// maxLevel = 121;
// Block Scope
function reset() {
    // console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow function
console.log("ARROW FUNCTION");
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(12, 59));
var multiplyNumbers = function (num1, num2) { return num1 * num2; }; //return num1*num2
console.log(multiplyNumbers(5, 6));
var greet = function () {
    console.log("Hi! there..");
};
greet();
var greetFriend = function (friend) {
    console.log(friend);
};
greetFriend("Vijay");
// Default Parameters
console.log('Default Parameters');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log(start);
};
countdown();
// Rest and Spread
console.log("REST AND SPREAD");
var numbers_in_array = [123, 56, 2556, 69];
console.log(Math.max(33, 86, 10));
console.log.apply(console, numbers_in_array); //(...)spread Operator
console.log(Math.max.apply(Math, numbers_in_array)); //finding max numbers using spread operator when collection is a array
var makeArray = function (name) {
    var args /*rest operator*/ = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(args);
    console.log("Hi " + name + ", You have " + args[0] + "," + args[1] + "," + args[2]);
};
makeArray("vikash", 20, 10, 30);
// Destructuring
console.log('DESTRUCTURING ARRAYS');
var myHobby = ['gaming', 'coding'];
var hobby1 = myHobby[0], hobby2 = myHobby[1];
console.log(hobby1 + "&" + hobby2);
console.log('DESTRUCTURING OBJECT');
var userDetail = {
    u_name: "Vikash",
    u_age: 22,
};
var u_name = userDetail.u_name, u_age = userDetail.u_age;
console.log(u_name + "&" + u_age);
var myname = userDetail.u_name, myage = userDetail.u_age; //defining alias (valid)
console.log(myname + "&" + myage);
// Template literals
var userName = "Vikash";
var literalString = "This is heading.\nI'm " + userName + ".\nI am learning typescript.";
console.log(literalString);
