//Map vs. For Loop
/*-----------------------------------------------------------------------------------*/
//let's see For loop first
var oldArr = [1, 2, 'h', 4];
var newArr = [];
for(var i=0; i<oldArr.length; i++){
    newArr[i] = oldArr[i] + 5;
}
//output: newArr = [6, 7, "h5", 9]

/*-------------------------------------------------------------------------------------*/

//let's see Map
let oldArr = [1, 2, 'h', 4]
let newArr = oldArr.map((value, i, oldArr) => {
    return value + 5;
});
//output: newArr = [6, 7, "h5", 9]

/*--------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------*/

//Filter vs. For Loop
/*--------------------------------------------------------------------------------------*/
//let's see For loop first
let arr = [1, 2, 3, 4, 6, 7, 8, 10];
let odd = [];
for(var i =0; i<arr.length; i++) {
    if(arr[i]%2 != 0) odd.push(arr[i]);
}
//output: odd = [1,3,7]

/*--------------------------------------------------------------------------------------*/

//let's see Filter
let arr = [1, 2, 3, 4, 6, 7, 8, 10];
let odd = arr.filter( val => {
    return val%2 != 0;
}); 
//output: odd = [1, 3, 7]

/*---------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------*/

//Reduce vs. For Loop
/*---------------------------------------------------------------------------------------*/
//let's see For loop first
let arr = [1, 2, 3, 4, 5];
var sum = 0;
for(var i=0; i<arr.length; i++) {
    sum += arr[i];
}
//output: sum = 15

/*---------------------------------------------------------------------------------------*/

//let's see Reduce
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((accumulator, value) => {
     return accumulator + value;
});
//output: sum = 15

/*---------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------*/

//Errors
/*----------------------------------------------------------------------------------------*/
//Syntax errors
console.log("I Love JavaScript";

//Logical errors
let x=3;
for( var i=0; i<x; i++)
{
  console.log(x);
} 
/* Expected output:
   0
   1
   2  */
/* Actual output:
   3
   3
   3 */

//Runtime errors
window.show();

/*-------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------*/

//Exception Handling
/*-------------------------------------------------------------------------------------------*/
//try...catch...finally
let x="Hello World";
try
{
  if(isNaN(x)) throw "The given input is not a number.";
}
catch(error)
{
  console.log(error);
}
finally
{
 console.log("Finally, the code is ended!");
}
/* output: The given input is not a number.
           Finally, the code is ended!   */


// example2

let x=5;
try
{
  if(isNaN(x)) throw "The given input is not a number";
}
catch(error)
{
  console.log(error);
}
finally
{
 console.log("Finally, the code is ended!");
}
// output: Finally, the code is ended! 