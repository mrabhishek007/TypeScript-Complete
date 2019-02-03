/*
To import modules :
step 1 - type -  npm install systemjs@0.19.36 --save
step 2 - configure index.html like following ----

         <script src="node_modules/systemjs/dist/system.js"></script>
         <script>
       // set our baseURL reference path
            SystemJS.config({
            baseURL: '/',
            defaultJSExtensions: true
            });
            SystemJS.import('5.es6modules');
         </script>
*/


// import {PI,calcCircumference} from "./5.circleMath" ;   //  [ ES6 syntax]   OR
import * as Circle from  "./5.circleMath";
import {calcRectangle} from "./5.rectangleMath";

//path starting with(./) are called relative path.path
//path starting with (filename) are absolute path.typescript will look for those path in node modules folder default

console.log(Circle.PI);
console.log(Circle.calcCircumference(12));
console.log(calcRectangle(10,3));
