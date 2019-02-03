"use strict";
var MyMath;
(function (MyMath) {
    MyMath.PI = 3.14;
    function calcCircumference(radius) {
        return 2 * MyMath.PI * radius;
    }
    MyMath.calcCircumference = calcCircumference;
})(MyMath || (MyMath = {}));
