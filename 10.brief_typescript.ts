let a: number;
let b: string;
let c: boolean;

a = 30;
b = "ram";
c = false

        // Array

let myArry : number[];
myArry = [];
myArry = [1, 2, 3];

        // tuple

let myarray : [number,boolean] = [12,true];
console.log(myarray) ;

        // function

function add(a: number, b: number, c: number = 10, d?: number) {  //c & d are optional here
    if(d==undefined){
        d=0;
    }
    return a+b+c+d;
}
console.log(add(10,20)); //valid
console.log(add(50,40, 10, 100)); //valid


        // Implicit typing

let p = 20;
// p = "hi";  error bcz typescript automatically assign type to a variable when variable is initialized

function greets() {
    return "Hello! Good Morning";
}
let greeting;  // when a variable is only declared and not given any type name then internally it is of any type
greeting = greets();
greeting = "Star Buzz....";  // valid bcz it is of any type
console.log(greeting);

let greetings = greets(); // when variable assignment done while declaring a variable typescript internally assign type with it(Here it is of greets type )
// greetings = 20; // error bcz greetings is of greets type..


        //union type
let x : boolean | string;   // x can be either boolean or string type
x = true;
x = "Hello";


      // classes
class PersonDemo {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName +" "+  this.lastName ;
    }
}
var aperson = new PersonDemo("Vikash", "Kr");  //internally 'aperson' is of 'PersonDemo'  type
console.log(aperson.getFullName());


        // Inheritance
class PersonX{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName +" "+  this.lastName ;
    }

    greet(){
        console.log("Hey! there.. I am from Parent class");
    }
}
class Programmer extends PersonX{

/*
                   Below code is mandatory if a constructor is defined in base class

    // If a constructor is used in base class, then 'super(arg)' is mandatory (OOPS concept).If you don't want to call super(), then don't define a construtor here

        constructor(f_Name: string, l_Name: string){
        super(f_Name, l_Name);
        }

     */

     greet(){
         console.log("Good morning fellas.. I am from base class");
     }

     greetLikeNormalPeople(){
         //super.greet(); // calling parent class greet()
         this.greet(); // calling current class greet people
     }


}

var aprogrammer = new Programmer("Raushu","Don") ;
aprogrammer.greetLikeNormalPeople();

 // when parent class (PersonX) type is assigned to the child class (Programmer), you will no longer able to call child class methods, only parent class properties are accessible through it..
var aprogrammer1 : PersonX = new Programmer("Harry","Porter") ;
// aprogrammer1.greetLikeNormalPeople();  // invalid bcz reference is of base class type
aprogrammer1.greet(); //still base class method are called bcz reference is of base class type(Only valid for overridden properties )


        // Interface
interface PersonIntf {
    firstName:string;
    lastName:string;
    getfullName():string;
}

class Persons implements PersonIntf {
    firstName: string = "Jason";
    lastName: string = "Bourne";

    getfullName(): string {
        return this.firstName + this.lastName;
    }

    greet(){
        console.log("Hi ! Users....")
    }
}

let personInt: PersonIntf = new Persons();

let dummyUser = {
    firstName:"Ramu",
    lastName: "Kaka",
    foo: ()=> "Hello", // this property is not accessible below bcz 'PersonIntf' interface doesn't contain this property
    getfullName:() => "Sonia"
}
personInt = dummyUser ;  // [duck typing] valid bcz above object has all the properties required to fulfill 'PersonIntf' Interface


let dummyUser1: PersonIntf = {   // also Valid
    firstName:"Ramu",
    lastName: "Kaka",
    getfullName: () => "Sonia",
}


        // Member Visibility
class PersonXX{

    /*    Approach 1 to initialize property using constructor

   private firstName: string;
   private lastName: string;

   constructor(firstName: string, lastName: string){
       this.firstName = firstName;
       this.lastName = lastName;
   }
    */

        /*Approach 2: Same above thing can be achieved using this syntax */
    constructor(protected firstName: string, private lastName: string){

    }


    setFirstName(firstName: string){
        this.firstName = firstName ;
    }

    getFirstName(){
        return this.firstName;
    }

    setLastName(lastName: string){
        this.lastName = lastName ;
    }

    getLastName(){
        return this.lastName;
    }

    getFullName(){
        return `${this.firstName}  ${this.lastName }`;
    }

}
class PersonBaseXX extends PersonXX{

    greet(){
        // this.lastName;  //invalid bcz lastName is a private property
       return this.firstName;  //accessible bcz firstName is protected.['protected' variables are accessible if dme class inherits parent class]

   }
}

let personXX = new PersonBaseXX("Sherlok","holmes");
console.log(personXX.getFullName());
console.log(personXX.greet());

        // Read Only Modifier

class PrivatePerson{

    //Read only property can be assigned in only places : 'During property declaration' OR 'During constructor initialization'

/*  [ Valid but lengthy use shortcut as defined in constructor ]

    readonly name: string = "Google" ; // non-writable property

    constructor(name: string){
        this.name = name; // valid during constructor initialization
    }
*/

    // same code but shortcut
    constructor(readonly name: string){

    }

    getName(){
        // this.name = "change" ;  invalid it's a read only property
    }
}

let privatePerson = new PrivatePerson("Pixer");
// privatePerson.name = "Apple";  //error bcz name is a read only property
console.log(privatePerson.name);


        // enums
enum DaysOfTheWeek {
    SUN,   // SUN = 0
    MON,   // MON = 1
    TUE = 50,  // TUE = 50
    WED,  //WED = 51
    THU,
    FRI,
    SAT
}

let day:DaysOfTheWeek;
day = DaysOfTheWeek.MON;

if(day === 1){
    console.log("Got to go to Work !")
}

        // Generics

  //simple generics
// @ts-ignore
function echo <T>(value: T): T {
    return value;
}
console.log(echo<number>(25));

    //Powerful generics
class Human{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName +" "+  this.lastName ;
    }

}
class Admin extends Human{
    getAcess(){
        console.log("Admin acess..");
    }
}

class Manager extends Human{
    getSal(){
        console.log("Salary : " + 65400);
    }
}

let admin = new Admin("a", "b");
let manager = new Manager("x", "y");


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

function menEcho<T extends Human>(object : T): T {
   return object;
}
let newadmin = menEcho(admin); //admin object will be returned
newadmin.getAcess(); // valid

let newmanager = menEcho(manager); //manager object will be returned
newmanager.getSal(); //valid




