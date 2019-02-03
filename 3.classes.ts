class Person{
    //We don't use 'this' to declare a property just like we do in javascript classes[es6]

    name:string;  //By default it is a public
    private age:number=21; //typescript feature [not available in es6] ,only accessible inside this class
    protected occupation:string="" ; //typescript feature, protected can be also accessed through inherited class

    constructor( name:string, public username:string) //new property username is created
    { 
            this.name = name;
    }

    printAge(){   //function declaration in classes[Es6 feature]
        console.log(this.age);
        this.setOccupation('Magician');
    }

    setOccupation(occupation:string){
        this.occupation = occupation;
        console.log(this.occupation);
    }

}
const personObj:Person = new Person('vikash','Mr_vikash');
console.log(personObj.name +" "+ personObj.username);
personObj.printAge();
personObj.setOccupation('Engineer');


// Inheritance
class Friend extends  Person{
    constructor(userName:string){
        super("Moru",userName);//must call super() of parent class
        this.occupation='software developer'; //protected is accessible using inheritance
    }

    getOccuppation():string{
        return this.occupation;
    }
}
const friend  = new Friend("Morkel");
console.log(friend.name+" "+friend.username);
console.log(friend);
console.log(friend.getOccuppation());

// Getter and Setter
class Plant{
    private _species:string="default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if(value.length >3){
            this._species = value;
        }else{
            this._species= "default";
        }
    }
}
const plant = new Plant();
console.log(plant.species);
// plant.species("Mannal");  Wrong  syntax ,use ' plant.species = "Mannal" ' to set value bcz of setter
plant.species = "Blue_whale";
console.log(plant.species);

//Static property and Methods

class Helper{
   static PI:number = 3.14;
   static calcCircumference(diameter:number):number{
      return this.PI*diameter;
   }
}
console.log(2*Helper.PI);
console.log(Helper.calcCircumference(5));

// Abstract Classes

abstract class Project {     //instance of abstract class cannot be created
    project_name: string = "Default";
    budget:number=1000;

    calcBudget():number{
        return 2*this.budget;
    }

    abstract changeName(name:string):string; //only blueprint
}

class ItProject extends Project{

    //changeName must be overridden bcz parent class has abstract fun
    changeName(name: string): string {
        this.project_name =name ;
        return name;
    }
}
let newproject = new ItProject();
console.log(newproject);
console.log(newproject.changeName("Super IT project"));
console.log(newproject);

// Private Constructor

class OnlyOne {
    private static instance:OnlyOne;
    public readonly name:string;

    private  constructor (name: string)  {
        this.name = name;
    };

    static getInstance():OnlyOne {
            if (!OnlyOne.instance){
                OnlyOne.instance = new OnlyOne('I am creating singleton')
            }
              return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('Hi');
let right = OnlyOne.getInstance();
console.log(right);
console.log(right.name);
// right.name = "change name";
//Use 'readonly' and getter to restrict outside access