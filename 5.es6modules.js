"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
// import {PI,calcCircumference} from "./5.circleMath" ;   //  [ ES6 syntax]   OR
var Circle = __importStar(require("./5.circleMath"));
var _5_rectangleMath_1 = require("./5.rectangleMath");
//path starting with(./) are called relative path.path
//path starting with (filename) are absolute path.typescript will look for those path in node modules folder default
console.log(Circle.PI);
console.log(Circle.calcCircumference(12));
console.log(_5_rectangleMath_1.calcRectangle(10, 3));
