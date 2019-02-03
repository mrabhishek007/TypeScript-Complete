"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ex1
var double = function (val1) { return val1 * 2; };
console.log(double(25));
// Ex2
var greet = function (name) {
    if (name === void 0) { name = 'Max'; }
    console.log(name);
};
greet();
greet("Anna");
// Ex3   Spread Operator
var values = [121, 56, 75, 16];
console.log((Math.min.apply(Math, values)));
// Rest Operator
var newArray = [12, 56, 30];
var newItem = [35, 9, 75];
newArray.push.apply(newArray, newItem);
console.log(newArray);
// Es5
var test_results = [3.89, 2.84, 1.6];
var num1 = test_results[0], num2 = test_results[1], num3 = test_results[2];
console.log(num1 + "  " + num2 + "  " + num3 + " ");
// Es6
var scientist = {
    firstname: 'Mak',
    lastname: 'Farady',
    age: 71
};
var f_name = scientist.firstname, l_name = scientist.lastname, age = scientist.age;
console.log("He is a scientist. His name is " + f_name + " " + l_name + ".He is " + age + " years old ");
