"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function decoratorFunction(constructerFun) {
    console.log(constructerFun);
}
var DecoratorClass = /** @class */ (function () {
    function DecoratorClass() {
        console.log("hi");
    }
    DecoratorClass = __decorate([
        decoratorFunction // DecoratorClass constructor is now linked with decoratorFunction.All the properties defined in this constructor will accessible to DecoratorFunction
    ], DecoratorClass);
    return DecoratorClass;
}());
// Decorator Factories
function logging(value) {
    return value ? decoratorFunction : null; // if else statement
}
// @ts-ignore    //below statement is right( typescript compiler bug )
var Car = /** @class */ (function () {
    function Car() {
        console.log("I am a car");
    }
    Car = __decorate([
        logging(true) // If true Car constructor is passed to decorator and decorator will have access to all properties of Car constructor
    ], Car);
    return Car;
}());
// Advanced Decorators
function Printabe(constructorFun) {
    constructorFun.prototype.print = function () {
        console.log(this);
    };
}
// @ts-ignore //below statement is also right(typescript compiler bug)
var Plants = /** @class */ (function () {
    function Plants() {
        this.name = "Green Plant";
    }
    Plants = __decorate([
        logging(true) // multiple decorator is valid
        ,
        Printabe
    ], Plants);
    return Plants;
}());
var pobj = new Plants();
pobj.print();
// Method Decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
// Property Decorator
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var MyProject = /** @class */ (function () {
    function MyProject(name) {
        this.projectName = name;
    }
    // Used to change the existing configuration of an object
    MyProject.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true) // setting configuration of an property if false that it cannot be overridden
    ], MyProject.prototype, "projectName", void 0);
    __decorate([
        editable(false) //if true = overriding allowed, if false overriding not allowed
    ], MyProject.prototype, "calcBudget", null);
    return MyProject;
}());
var project = new MyProject("SuperProject");
project.calcBudget();
/*

// overriding calcBudget property of MyProject class.
project.calcBudget =  function () {         // error : Overriding not allowed bcz property descriptor is set to writable=false.so basically it's a read only property
    console.log("New Budget is 2000");
}

*/
project.calcBudget();
console.log(project.projectName);
//Parameter Decorator
function printInfo(target, methodname, paramIndex) {
    console.log("Target : " + target);
    console.log("Methodname : " + methodname);
    console.log("ParamIndex : " + paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        printAll ? console.log(1000) : console.log(2000); //simple if else shorthand
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("Javascript");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
