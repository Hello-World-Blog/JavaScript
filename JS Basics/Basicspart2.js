//Map 
/*-----------------------------------------------------------------------------------*/
let stuArr = [
  {'name':'Charishma', 'age':20, 'rollno':4},
  {'name':'Tarun', 'age':21, 'rollno':5},
  {'name':'Vamsi', 'age':21, 'rollno':6}
  ];
  //Now lets double the value of rollno
  let modRollno= stuArr.map( item => ({
    ...item,
       rollno: item.rollno*2
  }))
  console.log(modRollno);
  
  /* output: [
  {"name":"Charishma", "age":20, "rollno":8}
  {"name":"Tarun", "age":21, "rollno":10}
  {"name":"Vamsi", "age":21, "rollno":12}
  ] */
  
  /*--------------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------------*/
  
  //Filter
  /*--------------------------------------------------------------------------------------*/
  let stuArr = [
  {"name":"Charishma", "age":20, "rollno":4},
  {"name":"Tarun", "age":21, "rollno":5},
  {"name":"Vamsi", "age":21, "rollno":6},
  {"name":"Surya", "age":51, "rollno":7},
  {"name":"Bhanuja", "age":18, "rollno":8},
  {"name":"Raji", "age":17, "rollno":9}
  ];
  
  let modArr= stuArr.filter( item => item.age> 18) 
  console.log(modArr);
  
  /* output: [
  {name: "Charishma", age: 20, rollno: 4}
  {name: "Tarun", age: 21, rollno: 5}
  {name: "Vamsi", age: 21, rollno: 6}
  {name: "Surya", age: 51, rollno: 7}
  ] */
  
  /*---------------------------------------------------------------------------------------
  -----------------------------------------------------------------------------------------*/
  
  //Reduce 
  /*---------------------------------------------------------------------------------------*/
  let distances = [
    { 'from': 'New York', 'to': 'Dhaka', 'distance': 12654},
    { 'from': 'Vizag', 'to': 'Chennai', 'distance': 8858},
    { 'from': 'Kakinada', 'to': 'Hyderabad', 'distance': 1270}
  ]
  
  let reducedDistance = distances.reduce((prevVal, item) => prevVal + item.distance, 0)
  console.log(reducedDistance)
  
  // output: 22782
  
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