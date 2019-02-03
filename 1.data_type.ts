// string
let myName: string = "Vikash"
// myName = 20;

// number
let myAge: number = 20;
// myAge = 'Vikash';
myAge = 30;

// boolean
let hashobbies: boolean = true;
// hashobbies=1;

// Assign types
let myRealAge: number;
myRealAge = 22;
// myRealAge = '22';

// Array
let hobbies: any[] = ['play','sleep','code'];
hobbies= [100];

// tuples
let address: [number, string] = [99 , 'string']; //first no. must be defined than a string
// address = ['patna',110];

// enum
enum Color {
    red, //0
    green= 100,//100
    white, //101
    yellow=3,
}
console.log(Color.white);
console.log(Color.yellow);

// any
let car: any = 'bmw';
console.log(car);
car= {brand:'bmw', series:3};
console.log(car);

// functions
function returnMyName():string  {
    return myName;
}
console.log(returnMyName());

// void
function sayHello():void {
    console.log('Hello from Vikash!');
}
sayHello();

// argument types
function multiply(  value1:number,  value2:number): number {
    return value1 * value2 ;
}
// console.log(multiply(2,'cow'));
console.log(multiply(20,30));

// function types
let myMultiply: (a: number, b: number) => number ;
myMultiply = multiply;
console.log(myMultiply(20,10));

// Object Types
let userData : {name:string, age:number, height:number } = {
    name:'Anu',
    age:22,
    height:5.6,
    // gender:'male'
}
/*userData = {
    a:'Raj',
    b:21,
    c:5.1
}*/

// complex object
let complex: {data:number[], output: (all:boolean) => number[]} = {
    data: [21,22,26],

    output: function (all: boolean): number[] {
        return this.data;
    }
}
// complex{};

// type alias
type Complex = {data:number[], output: (all:boolean) => number[]};

let complex2: Complex={
    data:[28,75,93],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
let myFriendAge: number | String = 27;
console.log(myFriendAge);
// myFriendAge = true;

//check data_type
let data = 1985;
if(typeof data == "number"){
    console.log(`${data} is a number`);
}else{
    console.log(`${data} is a ${typeof data}`);
}






