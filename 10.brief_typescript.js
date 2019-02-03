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
var a;
var b;
var c;
a = 30;
b = "ram";
c = false;
// Array
var myArry;
myArry = [];
myArry = [1, 2, 3];
// tuple
var myarray = [12, true];
console.log(myarray);
// function
function add(a, b, c, d) {
    if (c === void 0) { c = 10; }
    if (d == undefined) {
        d = 0;
    }
    return a + b + c + d;
}
console.log(add(10, 20)); //valid
console.log(add(50, 40, 10, 100)); //valid
// Implicit typing
var p = 20;
// p = "hi";  error bcz typescript automatically assign type to a variable when variable is initialized
function greets() {
    return "Hello! Good Morning";
}
var greeting; // when a variable is only declared and not given any type name then internally it is of any type
greeting = greets();
greeting = "Star Buzz...."; // valid bcz it is of any type
console.log(greeting);
var greetings = greets(); // when variable assignment done while declaring a variable typescript internally assign type with it(Here it is of greets type )
// greetings = 20; // error bcz greetings is of greets type..
//union type
var x; // x can be either boolean or string type
x = true;
x = "Hello";
// classes
var PersonDemo = /** @class */ (function () {
    function PersonDemo(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonDemo.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return PersonDemo;
}());
var aperson = new PersonDemo("Vikash", "Kr"); //internally 'aperson' is of 'PersonDemo'  type
console.log(aperson.getFullName());
// Inheritance
var PersonX = /** @class */ (function () {
    function PersonX(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonX.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    PersonX.prototype.greet = function () {
        console.log("Hey! there.. I am from Parent class");
    };
    return PersonX;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
                       Below code is mandatory if a constructor is defined in base class
    
        // If a constructor is used in base class, then 'super(arg)' is mandatory (OOPS concept).If you don't want to call super(), then don't define a construtor here
    
            constructor(f_Name: string, l_Name: string){
            super(f_Name, l_Name);
            }
    
         */
    Programmer.prototype.greet = function () {
        console.log("Good morning fellas.. I am from base class");
    };
    Programmer.prototype.greetLikeNormalPeople = function () {
        //super.greet(); // calling parent class greet()
        this.greet(); // calling current class greet people
    };
    return Programmer;
}(PersonX));
var aprogrammer = new Programmer("Raushu", "Don");
aprogrammer.greetLikeNormalPeople();
// when parent class (PersonX) type is assigned to the child class (Programmer), you will no longer able to call child class methods, only parent class properties are accessible through it..
var aprogrammer1 = new Programmer("Harry", "Porter");
// aprogrammer1.greetLikeNormalPeople();  // invalid bcz reference is of base class type
aprogrammer1.greet(); //still base class method are called bcz reference is of base class type(Only valid for overridden properties )
var Persons = /** @class */ (function () {
    function Persons() {
        this.firstName = "Jason";
        this.lastName = "Bourne";
    }
    Persons.prototype.getfullName = function () {
        return this.firstName + this.lastName;
    };
    Persons.prototype.greet = function () {
        console.log("Hi ! Users....");
    };
    return Persons;
}());
var personInt = new Persons();
var dummyUser = {
    firstName: "Ramu",
    lastName: "Kaka",
    foo: function () { return "Hello"; },
    getfullName: function () { return "Sonia"; }
};
personInt = dummyUser; // [duck typing] valid bcz above object has all the properties required to fulfill 'PersonIntf' Interface
var dummyUser1 = {
    firstName: "Ramu",
    lastName: "Kaka",
    getfullName: function () { return "Sonia"; },
};
// Member Visibility
var PersonXX = /** @class */ (function () {
    /*    Approach 1 to initialize property using constructor

   private firstName: string;
   private lastName: string;

   constructor(firstName: string, lastName: string){
       this.firstName = firstName;
       this.lastName = lastName;
   }
    */
    /*Approach 2: Same above thing can be achieved using this syntax */
    function PersonXX(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonXX.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    PersonXX.prototype.getFirstName = function () {
        return this.firstName;
    };
    PersonXX.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    PersonXX.prototype.getLastName = function () {
        return this.lastName;
    };
    PersonXX.prototype.getFullName = function () {
        return this.firstName + "  " + this.lastName;
    };
    return PersonXX;
}());
var PersonBaseXX = /** @class */ (function (_super) {
    __extends(PersonBaseXX, _super);
    function PersonBaseXX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonBaseXX.prototype.greet = function () {
        // this.lastName;  //invalid bcz lastName is a private property
        return this.firstName; //accessible bcz firstName is protected.['protected' variables are accessible if dme class inherits parent class]
    };
    return PersonBaseXX;
}(PersonXX));
var personXX = new PersonBaseXX("Sherlok", "holmes");
console.log(personXX.getFullName());
console.log(personXX.greet());
// Read Only Modifier
var PrivatePerson = /** @class */ (function () {
    //Read only property can be assigned in only places : 'During property declaration' OR 'During constructor initialization'
    /*  [ Valid but lengthy use shortcut as defined in constructor ]
    
        readonly name: string = "Google" ; // non-writable property
    
        constructor(name: string){
            this.name = name; // valid during constructor initialization
        }
    */
    // same code but shortcut
    function PrivatePerson(name) {
        this.name = name;
    }
    PrivatePerson.prototype.getName = function () {
        // this.name = "change" ;  invalid it's a read only property
    };
    return PrivatePerson;
}());
var privatePerson = new PrivatePerson("Pixer");
// privatePerson.name = "Apple";  //error bcz name is a read only property
console.log(privatePerson.name);
// enums
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 0] = "SUN";
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 1] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 50] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 51] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THU"] = 52] = "THU";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 53] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 54] = "SAT";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var day;
day = DaysOfTheWeek.MON;
if (day === 1) {
    console.log("Got to go to Work !");
}
// Generics
//simple generics
// @ts-ignore
function echo(value) {
    return value;
}
console.log(echo(25));
//Powerful generics
var Human = /** @class */ (function () {
    function Human(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Human.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Human;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.getAcess = function () {
        console.log("Admin acess..");
    };
    return Admin;
}(Human));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getSal = function () {
        console.log("Salary : " + 65400);
    };
    return Manager;
}(Human));
var admin = new Admin("a", "b");
var manager = new Manager("x", "y");
/*           PROBLEM FACED WHEN NOT USING GENERICS

function menEcho(object : Human): Human {
    return object;
}

let newadmin = menEcho(admin); //person object will be returned but i want to return admin object with typesafety feature
newadmin.getAcess(); //invalid bcz returnend type is person

let newmanager = menEcho(manager); //person object will be returned
newmanager.getSal(); //also invalid

*/
// Solution
function menEcho(object) {
    return object;
}
var newadmin = menEcho(admin); //admin object will be returned
newadmin.getAcess(); // valid
var newmanager = menEcho(manager); //manager object will be returned
newmanager.getSal(); //valid
