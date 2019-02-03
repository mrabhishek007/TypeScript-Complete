 // Simple Generic
function echo(data: any) {
    return data;
}
console.log(echo("Raj").length);
console.log(echo(26).length);   //(length property is valid) Result : Undefined  => Ide doesn't know which type of data userObj is passing
console.log(echo({"Name": "Sonu", "age": 22}).length);


 // Powerful Generic
function powerEcho<T>(data: T) {
    return data;
}
console.log(powerEcho("Ramu").length);
// console.log(powerEcho(26).length);  /* 'Compile time error' bcz compiler know exactly which type of data is passed */
console.log(powerEcho({"Name": "Sonu", "age": 22} ));
console.log(powerEcho(<number>100)) ; //also valid

 // Built-in Generics
 const test_res: Array<number> = [2,1.68,5.6];
 // test_res.push("ABC");  //compile time error bcz test_res is of number type
 test_res.push(1.2); //valid
 console.log(test_res);

 // Arrays
 function printAll<T>(args: T[]) {
     args.forEach(function (element) {
         console.log(element);
     })
 }
 printAll <String> (["Banana", "Apple"]);

    // Generic Type
 const echo2: <T>(data: T) => T = powerEcho ;
 console.log(echo2<string>("Hello! User.."));
 
  // Generic class
 class SimpleMath<T extends number , U extends number | string> {
     private baseValue:T;
     private multiplyValue:U;

     constructor(val1: T, val2: U)  {
         this.baseValue = val1;
         this.multiplyValue = val2;
     }
     calculate(): number {
         return this.baseValue * +this.multiplyValue ;   // '+' is used to make a string to number
     }
 }
 let math = new SimpleMath<number,string>(20,"50");

 console.log(math.calculate());

 