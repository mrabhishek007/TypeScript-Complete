export{};
// Ex1
let double = (val1:number):number =>val1 * 2 ;
console.log(double(25));

// Ex2
let greet = (name :string='Max'):void =>{
    console.log(name);
}
greet();
greet("Anna");

// Ex3   Spread Operator
let values: number[] = [121,56,75,16];
console.log((Math.min(...values)));

// Rest Operator
let newArray : number[] = [12,56,30];
const newItem = [35,9,75];
newArray.push(...newItem);
console.log(newArray);


// Es5
const test_results:number[] = [3.89,2.84,1.6];
const [num1,num2,num3]:number[] = test_results
console.log(`${num1}  ${num2}  ${num3} `);

// Es6
const scientist: {firstname: string, lastname: string, age:number}  = {
    firstname:'Mak',
    lastname:'Farady',
    age:71
}
const {firstname: f_name, lastname: l_name, age} = scientist;
console.log(`He is a scientist. His name is ${f_name} ${l_name}.He is ${age} years old ` );