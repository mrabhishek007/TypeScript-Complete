//    Accessing namespace in a single file.If there are mutiple namespaces in seperate ts file we need to import them manually

/*
namespace MyMath{
    export const PI: number = 3.14 ;

    export function calcCircumference(radius: number) {
        return 2*PI*radius ;
    }
    
    export function calcRectangle(length: number, width: number) {
        return length*width ;
    }
}
const PI: number=2.96;
console.log(MyMath.calcCircumference(2));
console.log(MyMath.calcRectangle(10,5));
console.log(MyMath.PI);
console.log(PI);
*/

 /* When namespace file is defined in seperate file  */

/* After importing type in cmd : [  tsc 4.namespaces.ts --outFile 4.namespaces.js]
   Now js file will be integrated with seperate files successfully.. */


///<reference path="4.circleMath.ts"/>     //(importing namespace)
///<reference path="4.rectangleMath.ts"/>

import getMath = MyMath.calcCircumference; //setting alias insted of directly accessing
console.log(getMath(2));
console.log(MyMath.calcRectangle(10,5));
console.log(MyMath.PI);

