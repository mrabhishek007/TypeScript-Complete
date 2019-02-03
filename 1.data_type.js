"use strict";
// string
var myName = "Vikash";
// myName = 20;
// number
var myAge = 20;
// myAge = 'Vikash';
myAge = 30;
// boolean
var hashobbies = true;
// hashobbies=1;
// Assign types
var myRealAge;
myRealAge = 22;
// myRealAge = '22';
// Array
var hobbies = ['play', 'sleep', 'code'];
hobbies = [100];
// tuples
var address = [99, 'string']; //first no. must be defined than a string
// address = ['patna',110];
// enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 100] = "green";
    Color[Color["white"] = 101] = "white";
    Color[Color["yellow"] = 3] = "yellow";
})(Color || (Color = {}));
console.log(Color.white);
console.log(Color.yellow);
// any
var car = 'bmw';
console.log(car);
car = { brand: 'bmw', series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Hello from Vikash!');
}
sayHello();
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2,'cow'));
console.log(multiply(20, 30));
// function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(20, 10));
// Object Types
var userData = {
    name: 'Anu',
    age: 22,
    height: 5.6,
};
/*userData = {
    a:'Raj',
    b:21,
    c:5.1
}*/
// complex object
var complex = {
    data: [21, 22, 26],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [28, 75, 93],
    output: function (all) {
        return this.data;
    }
};
// union types
var myFriendAge = 27;
console.log(myFriendAge);
// myFriendAge = true;
//check data_type
var data = 1985;
if (typeof data == "number") {
    console.log(data + " is a number");
}
else {
    console.log(data + " is a " + typeof data);
}
