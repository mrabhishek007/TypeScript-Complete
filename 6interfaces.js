"use strict";
/*   Without interfaces

function test(person: {name:string} ){
  console.log(person.name);
}
function changeName(person: {name:string} ){
    person.name = "Anna";
  console.log(person.name);
}
const person = {
    name:"Vikash",
    age:22
}
test(person);
changeName(person);

*/
function namefun(person) {
    console.log(person.first_name);
}
var person = {
    first_name: "Vikash",
    age: 22,
    fullName: function (last_Name) {
        console.log("Hi, I'm " + this.first_name + " " + last_Name + " ");
    }
};
namefun(person);
/* Below statement gives error bcz typescript strictly check when object literal is directly passed, object literal must only contain interface properties.To avoid first declare object outside after then use*/
// namefun({first_name:"Raj",age:56});
/* No error bcz age is optional property in interface even object literal is defined directly without first declaring it outside..*/
// namefun({first_name:"Raj"});
person.fullName('kumar gaurav');
var Person1 = /** @class */ (function () {
    function Person1(f_name) {
        this.first_name = f_name;
    }
    /*Overriding*/
    Person1.prototype.fullName = function (last_Name) {
        console.log("Hi, I'm " + this.first_name + " " + last_Name + " ");
    };
    /* methods other than interface are also allowed */
    Person1.prototype.hobbies = function () {
        var hobb = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            hobb[_i] = arguments[_i];
        }
        console.log("I like " + hobb + " ");
    };
    return Person1;
}());
var per1 = new Person1("Bob");
namefun(per1);
per1.fullName("Nikolus");
per1.hobbies("Playing", "Gaming", "Sleeping");
var myFun;
myFun = function (value1, value2) {
    return value1 + value2;
};
console.log(myFun(20, 30));
//below object is SubInterface type which also extends DetailPerson Interface.so object have to override all the properties of both interface
var manDetails = {
    first_name: "Johnny",
    profession: "Teacher",
    fullName: function (l_name) {
        if (l_name == undefined)
            l_name = "Junior";
        console.log("Hey there! I am " + this.first_name + " " + l_name + " . I'm a " + this.profession);
    }
};
manDetails.fullName("Fernandez");
