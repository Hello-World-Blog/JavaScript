// Statements
alert('Hello World');
// ----------------------------------------------------------------------

// Delimiter examples

// ex-1
alert("Hello")
alert("JavaScript")

// ex-2
alert("Hello World")
[1,2].forEach(alert)//Check whether you are getting error or not..

// ---------------------------------------------------------------------

// Variables

// let example

let message;
message="Horray, i know about let variable";
alert(message);

// ---------------------------------------------------------------------

// var example

var message="Hello"
console.log(message);

// ---------------------------------------------------------------------

//Using both var and let-example

var x=3;
let y=1;
for(i=0;i<3;i++){
  var x=2;
  let y=2;
  x=x+i;
  y=y+i;
}
console.log(x)//4
console.log(y)//1

// ---------------------------------------------------------------------

// const example

const gender = "female";
console.log(gender);//Try to modify constant variable than you will definitely get an error

// ---------------------------------------------------------------------

// Data Types
// Dynamic type example

let x;
x=6;
x="Madhuri";//now print the message each and every time you modify it and check the output

// Strings example

const str = "hii";
console.log(str);

// Numbers example

let y=6.99;
console.log(y);

// Combination of both number and string-example

let x = 10 + 2 + "Manasa" //output-12Manasa
let y = "Manasa" + 10 + 2 //output-Manasa102

// Boolean example

let x = 6;
let y = 7;
if (x == y)
return true;
else
return false;

// Arrays example

let employees = ["Tarun", "Vamsi", "Surya"];
console.log(employees[0]);

// Adding a element in a array-example
employees[3]="Charishma";

// Array constructor creation -example
let employees = new Array("Tarun", "Vamsi", "Surya");

// Objects example

let person = {
firstName:"Charishma",
lastName:"Prathipati",
 age:20,
 changeAddress: function() {
 // lines of code
 }
};// In function print your own address using console.log

// Accessing properties and methods of an object -example

person.firstName;
person.changeAddress();

// ---------------------------------------------------------------------

// Conditionals

// If statement -example

const str= 'Malayalam';
let count=9;
let len=str.length;
if(count == len)
{
console.log("The string length is equal to count number");
}

// ---------------------------------------------------------------------

// If-Else statement -example

const str= 'Malayalam';
let count=8;
let len=str.length;
if(count == len)
{
console.log("The string length is equal to count number");
}
else
{
console.log("The string length is not equal to count number");
}

// ---------------------------------------------------------------------

// If-Else If-Else statement example

let marks=50;
if(marks>=80)
{
console.log("You are passed with high score");
}
else if(marks>40 && marks<80)
{
console.log("You are passed");
}
else
{
console.log("You are failed");
}

// ---------------------------------------------------------------------

// Switch statement-example

let grade='A';
switch(grade)
{
  case 'A': document.write("Good job");
  break;
  case 'B': document.write("Pretty good");
  break;
  case 'C': document.write("Passed");
  break;
  case 'D': document.write("Not so good");
  break;
  case 'F': document.write("Failed");
  break;
  default: document.write("Unknown grade");
}

// ---------------------------------------------------------------------

// Loops

// For loop -example

let str='Malayalam';
var count=0;
let len=str.length;
for ( let i=0; i<len; i++)
{
   if (str[i] !== str[len - 1 - i])
   {
       console.log("The string is not a palindrome");
       break;
   }
   else
   {
    count++;
   }
}
print(count);//o/p-9

// ---------------------------------------------------------------------

// For/In loop example

let property;
let person = { firstName : "Charishma", lastName : "Prathipati", age : 20};
for (property in person)
{
 console.log(property);
 console.log("<br/>");
}
/* output-firstName
          lastName
          age */

// ---------------------------------------------------------------------

// For/Of loop example

let languages = ['C', 'Python', 'Java', 'JavaScript'];
let x;
for(x of languages)
{
  console.log(x + "<br/>");
}

// ---------------------------------------------------------------------

// ForEach Example

let numbers = [1,2,3];
numbers.forEach((item) =>
 {
    console.log(item);
});      
//123

// ---------------------------------------------------------------------

// While loop example

num=1
while(num<5){
  console.log(num);
  num++; //1 to 4 numbers will be the output
}

// ---------------------------------------------------------------------

// Do-While Loop example

var num=1
do{
  console.log(num);
  num++;
}
while(num<5) //1 to 4 numbers will be the output

// ---------------------------------------------------------------------

//Functions example

function palindrome(str){
//Lines of code to be executed
}

//Let's see the code that covers the basic concepts

function palindrome(str1)
{
 const str=str1;
 var count=0;
 let len = str.length;
 for (let i = 0; i < len; i++) {
   if (str[i] !== str[len - 1 - i]) {
       console.log("The string is not a palindrome");
       break;
   }
   else{
    count++;
   }
 }
 if(count==len)
 console.log("The string is a palindrome");

}
palindrome('malayalam');
