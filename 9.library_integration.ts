/*  Change following configuration in html file to enable external library(JQUERY) ----------------------------
      map:{
        Enables external library import to typescript (key-name('jQuery') can be anything but you have to use same key-name also in typescript import statement)
        "jQuery": "node_modules/jquery/dist/jquery.min.js"
        }
*/


/*        -------------   Solution 1  ---------------

         Getting Ide support for jquery by following procedures :
         step 1 : Search definitelytyped 'jquery'(any external javascript library) in google.
         step 2 : Go to github and open index.d.ts.
         step 3 : Open as raw file and copy all data
         step 4 : make a file in current working directory and paste all the data.
         step 5 : typescript will automatically recognise the file and  starts providing ide support
*/



/*        -------------   Solution 2   ---------------

         step 1 : Run :  'npm install -g typings'   globally
         step 2 : After Installation to install jquery or any 3rd party javascript library open you current directory in cmd
         step 3 : Run : 'typings install dt~jquery --global --save' [where jquery is library name, you can use another library name to install any other library.global means any files in this project can access this file ]
*/

/*        -------------   Solution 3 (Recommended) BEST SOLUTION  ---------------
         With typescript 2.0 typescript added inbuilt feature to install external 3rd party libraries
         step 1 : Just Run :  'npm install --save-dev @types/jquery' where jquery = library name (any library can be installed as per userObj need)
 */

          /* Use 'tsc -w' to enable typescript watch mode.It will tell if any changes occur without recompiling */


import "jQuery";

$("#app").css({"background-color": "red"});
$("#app").css({"color": "white"});