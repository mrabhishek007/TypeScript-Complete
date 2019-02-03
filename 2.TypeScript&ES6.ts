// let & const
console.log('let & const')
let variable = "Test";
console.log(variable);
variable='Test Again!'
console.log(variable);

// constant
const maxLevel = 100 ;
console.log(maxLevel);
// maxLevel = 121;

// Block Scope
function reset() {
    // console.log(variable);
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow function
console.log("ARROW FUNCTION");
const addNumbers = function (num1: number, num2: number): number {
    return num1+num2;
};
console.log(addNumbers(12,59));

const multiplyNumbers = (num1: number, num2: number):number => num1*num2 ;   //return num1*num2
console.log(multiplyNumbers(5,6));

const greet = () => {
    console.log("Hi! there..")
};
greet();

const greetFriend = (friend:string) =>{
    console.log(friend);
};
greetFriend("Vijay");

// Default Parameters
console.log('Default Parameters');
const countdown = function (start: number=10 ):void {
    console.log(start);
    while(start > 0 ){
        start--;
    }
    console.log(start);

};
countdown();

// Rest and Spread
console.log("REST AND SPREAD");

const numbers_in_array:number[] = [123,56,2556,69];
console.log(Math.max(33, 86, 10));
console.log(...numbers_in_array); //(...)spread Operator
console.log(Math.max(...numbers_in_array));//finding max numbers using spread operator when collection is a array


const makeArray = function (name: string , ...args /*rest operator*/  : number[] ) {
    console.log(args);
    console.log(`Hi ${name}, You have ${args[0]},${args[1]},${args[2]}`)
}
makeArray("vikash", 20,10,30);

// Destructuring
console.log('DESTRUCTURING ARRAYS');
const myHobby:String[] = ['gaming','coding'];
const [hobby1,hobby2] = myHobby;
console.log(hobby1+"&"+hobby2);

console.log('DESTRUCTURING OBJECT');
const userDetail = {
    u_name: "Vikash",
    u_age:22,
};
const {u_name, u_age}= userDetail;
console.log(u_name+"&"+u_age);
const {u_name:myname, u_age:myage}= userDetail;  //defining alias (valid)
console.log(myname+"&"+myage);

// Template literals
const userName = "Vikash";
const literalString = `This is heading.
I'm ${userName}.
I am learning typescript.`;
console.log(literalString);