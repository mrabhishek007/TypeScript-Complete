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




/*-------  With Interface  ------*/
/* NOTE: Interfaces doesn't compiled to javascript code. Interfaces are only used to check error at compile time.. */

interface DetailPerson {

    first_name:string;   /*Object must contain first_name as property */
    age?:number;  /* when '?' is used as suffix in property that means this property is optional to define */
    [propertyName: string]:any;  /* (It is not array.just syntax)[optional]If any property name is unknown this can be used to avoid error.*/
    fullName( last_name: string): void

}
function namefun(person: DetailPerson)  /* person is of DetailPerson Interface type, so it must contain all the property DetailPerson have*/
{
    console.log(person.first_name);
}
const person = {
    first_name:"Vikash",
    age:22,    // optional property of interface, so even if not defined in object no error
    fullName: function(last_Name:string){
        console.log(`Hi, I'm ${this.first_name} ${last_Name} `);
    }
}
namefun(person);

/* Below statement gives error bcz typescript strictly check when object literal is directly passed, object literal must only contain interface properties.To avoid first declare object outside after then use*/
// namefun({first_name:"Raj",age:56});


/* No error bcz age is optional property in interface even object literal is defined directly without first declaring it outside..*/
// namefun({first_name:"Raj"});

person.fullName('kumar gaurav');


class Person1 implements DetailPerson{

     first_name: string;   /*Overriding*/

    constructor(f_name:string){
        this.first_name = f_name;
    }

        /*Overriding*/
    fullName(last_Name:string){
         console.log(`Hi, I'm ${this.first_name} ${last_Name} `);
     }

        /* methods other than interface are also allowed */
     hobbies(...hobb : string[]){
        console.log(`I like ${hobb} `)
     }

}
const per1 = new Person1("Bob");
namefun(per1);
per1.fullName("Nikolus");
per1.hobbies("Playing","Gaming","Sleeping");


/* Interfaces in Functions */

interface FunInterface {
    //whatever uses this interface must be a function of this type
    (nu1:number, num2: number): number
}

let myFun: FunInterface;
myFun = function (value1: number, value2: number) {

    return value1 + value2  ;
}
console.log(myFun(20,30));


//  Interface Inheritance

interface SubInterface extends DetailPerson{
    profession:string;
}


//below object is SubInterface type which also extends DetailPerson Interface.so object have to override all the properties of both interface
const manDetails: SubInterface = {
    first_name:"Johnny",   //override
    profession : "Teacher",  //override
    fullName : function (l_name:string) {      //override
        if(l_name==undefined)
            l_name = "Junior";
        console.log(`Hey there! I am ${this.first_name} ${l_name} . I'm a ${this.profession}`);
    }
}

manDetails.fullName("Fernandez");




