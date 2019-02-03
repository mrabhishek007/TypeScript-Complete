function decoratorFunction(constructerFun : Function) {
    console.log(constructerFun);
}

@decoratorFunction   // DecoratorClass constructor is now linked with decoratorFunction.All the properties defined in this constructor will accessible to DecoratorFunction
class DecoratorClass {
    constructor(){
        console.log("hi");
    }
}

  // Decorator Factories
function logging(value : boolean) {
    return value ? decoratorFunction : null ;  // if else statement
}

// @ts-ignore    //below statement is right( typescript compiler bug )
@logging(true) // If true Car constructor is passed to decorator and decorator will have access to all properties of Car constructor
class Car {
    constructor(){
        console.log("I am a car");
    }
}

// Advanced Decorators
function Printabe(constructorFun: Function) {
    constructorFun.prototype.print = function () {
        console.log(this);
    }
}

// @ts-ignore //below statement is also right(typescript compiler bug)
@logging(true)  // multiple decorator is valid
@Printabe
class Plants {
 name = "Green Plant";
}

let pobj = new Plants();
(<any>pobj).print();


// Method Decorator
function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {  // PropertyDescriptor also known as Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object
        descriptor.writable = value;
    }
}

// Property Decorator
function overwritable(value: boolean): any {
    return function (target:any, propName:string) {
        const newDescriptor : PropertyDescriptor = {
            writable: value
        }
        return newDescriptor;
    }
}

class MyProject {
    @overwritable(true) // setting configuration of an property if false that it cannot be overridden
    projectName: string ;

    constructor(name:string){
        this.projectName = name;
    }

    // Used to change the existing configuration of an object
    @editable(false)  //if true = overriding allowed, if false overriding not allowed
    calcBudget(){
        console.log(1000);
    }

}

var project = new MyProject("SuperProject");
project.calcBudget();
/*

// overriding calcBudget property of MyProject class.
project.calcBudget =  function () {         // error : Overriding not allowed bcz property descriptor is set to writable=false.so basically it's a read only property
    console.log("New Budget is 2000");
}

*/
project.calcBudget();
console.log( project.projectName );


//Parameter Decorator
function printInfo(target: any, methodname: string, paramIndex: number) {   //parameter decorator
    console.log("Target : " + target );
    console.log("Methodname : " + methodname );
    console.log("ParamIndex : " + paramIndex );
}

class Course {
    name: string;
    constructor(name: string){
        this.name = name ;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean){
        printAll ?  console.log(1000) :  console.log(2000);  //simple if else shorthand
    }
}
const course = new Course("Javascript");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
