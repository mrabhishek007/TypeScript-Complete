"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 21; //typescript feature [not available in es6] ,only accessible inside this class
        this.occupation = ""; //typescript feature, protected can be also accessed through inherited class
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setOccupation('Magician');
    };
    Person.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
        console.log(this.occupation);
    };
    return Person;
}());
var personObj = new Person('vikash', 'Mr_vikash');
console.log(personObj.name + " " + personObj.username);
personObj.printAge();
personObj.setOccupation('Engineer');
// Inheritance
var Friend = /** @class */ (function (_super) {
    __extends(Friend, _super);
    function Friend(userName) {
        var _this = _super.call(this, "Moru", userName) || this;
        _this.occupation = 'software developer'; //protected is accessible using inheritance
        return _this;
    }
    Friend.prototype.getOccuppation = function () {
        return this.occupation;
    };
    return Friend;
}(Person));
var friend = new Friend("Morkel");
console.log(friend.name + " " + friend.username);
console.log(friend);
console.log(friend.getOccuppation());
// Getter and Setter
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
// plant.species("Mannal");  Wrong  syntax ,use ' plant.species = "Mannal" ' to set value bcz of setter
plant.species = "Blue_whale";
console.log(plant.species);
//Static property and Methods
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helper.PI = 3.14;
    return Helper;
}());
console.log(2 * Helper.PI);
console.log(Helper.calcCircumference(5));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.project_name = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return 2 * this.budget;
    };
    return Project;
}());
var ItProject = /** @class */ (function (_super) {
    __extends(ItProject, _super);
    function ItProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //changeName must be overridden bcz parent class has abstract fun
    ItProject.prototype.changeName = function (name) {
        this.project_name = name;
        return name;
    };
    return ItProject;
}(Project));
var newproject = new ItProject();
console.log(newproject);
console.log(newproject.changeName("Super IT project"));
console.log(newproject);
// Private Constructor
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    ;
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('I am creating singleton');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('Hi');
var right = OnlyOne.getInstance();
console.log(right);
console.log(right.name);
// right.name = "change name";
//Use 'readonly' and getter to restrict outside access
