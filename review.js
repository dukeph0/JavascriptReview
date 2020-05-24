/*Simple Hello World*/
console.log("Hello, World!");

/*Variables and Types*/
var myNumber = 3; // a number
var myString = "Hello World"; // a string
var myBoolean = true; // a boolean

var myArray = []; // an array
var myObject = {}; // an object

var newVariable;
console.log(newVariable); // prints undefined

var emptyVariable = null;
console.log(emptyVariable); // will print out null

/*Arrays*/
var myArray = [1, 2, 3];
var theSameArray = new Array(1, 2, 3);
//Addressing 
console.log(myArray[1]); // prints out 2
var myArray = []
myArray[3] = "hello"
console.log(myArray);
// Array Elements
var myArray = ["string", 10, {}] // example of an array w/ different elements.

/*Manipulating Arrays*/
//Pushing and Popping
var myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack); // prints out 1,2,3

console.log(myStack.pop());
console.log(myStack); // prints out the variable we popped from the array, and what's left of the array.

// Queues using shifting and unshifting
var myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
console.log(myQueue.shift()); // prints 1
console.log(myQueue.shift()); // prints 2
console.log(myQueue.shift()); // prints 3
//unshift method: wull insert variable at the begining of array.
var myArray = [1,2,3];
myArray.unshift(0);
console.log(myArray); // prints out 0,1,2,3

//Splicing: removes a certain part of the array to create a new array.
var myArray = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3,5);
console.log(splice); // prints out 3,4,5,6,7
console.log(myArray); // prints out 0,1,2,8,9

/*Operators*/
//The addition operator
var a = 1;
var b = 2;
var c = a + b;  // c equals 3
//concatenating string to numbers, and numbers to strings:
var name = "Duke";
console.log("Hello " + name + "!");
console.log("The meaninging of life is " + 42);
console.log(42 + " is the meaning of life");
//Mathematical Operators
console.log(3 - 5);   // outputs -2
console.log(3 * 5);   // outputs 15
console.log(3 / 5);   // outputs 0.6
//Advanced mathematical operators
console.log(5 % 3);   // outputs 2
// Note: Javascript also has a math module which contains more advanced functions.

/*Conditions*/
//The if statement
if(confirm("Are you John Conner?")){
  console.log("Hello John, how are you?");
}else{
  console.log("Then what is your name?");
}
// == operator
var myNumber = 42;
if(myNumber == 42){
  console.log("The number is correct.");
}
// inequality operator
var foo = 1;
var bar = 2;
if(foo < bar){
  console.log("foo is smaller than bar.");
}
// AND/OR Operator
var foo = 1;
var bar = 2;
var moo = 3;
if(foo < bar && moo > bar){
  console.log("foo is smaller than bar AND moos is larger than bar.");
}
if(foo < bar || moo > bar){
  console.log("foo is smaller than bar OR moo is smaller than bar.");
}
// NOT oepator
var notTrue = false;
if(!notTrue){
  console.log("not not true is true!");
}
// switch statement
var rank = "Commander";
switch(rank){
  case "Private":
  case "Sergeant":
    console.log("You are not authorized.");
    break;
  case "Commander":
    console.log("Hello commander! What can I do for you today?");
    break;
  case "Captain":
    console.log("Hello captain! I will do anything you wish.");
  default:
    console.log("I don't know what your rank is.");
    break;
}

/*Loops*/
// for loop
var i;
for(i = 0; i < 3; i = i + 1){
  console.log(i);
  /*prints
  0
  1
  2 */
}
for(var i = 0; i < 3; i++){
  console.log(i);
}
var myArray = ["A", "B", "C"];
for (var i = 0; i < myArray.length; i++)
{
  console.log("The member of myArray in index " + i + " is "+ myArray[i]);
}

// while statement
var i = 99;
while(i>0){
  console.log(i + " bottles of beer on the wall");
  i -= 1;
}
//break and continue statments
var i = 99;
while(true){
  console.log(i + " bottles of beer on the wall");
  i -= 1;
  if(i == 0){
    break; // breaks the loop once the condition is met.
  }
}
for(var i = 0; i < 100; i++){
  // checks if the number is even
  if(i % 2 == 0){
    continue;
  }
  // if we got here, then i is odd.
  console.log(i + " is an odd number.");
}

/*Objects*/
// Initializing an object
var emptyObject = {};
var personObject = {
  firstName : "Duke",
  lastName: "Pham"
}
// Member addressing 
var personObject = {
  firstName: "John", lastName: "Smith"
}
personObject.age = 23;
personObject["salary"] = 140000;
// Iteration
for(var member in personObject){
  if(personObject.hasOwnProperty(member)){
    console.log("the member " + member + " of personObject is " + personObject[member])
  }
}

/*Functions*/
// Defining a named function
function greet(name){
	return "Hello " + name + "!";
}
console.log(greet("Eric"));	//prints out Hello Eric!
// Defining an anonymous function
var greet = function(name){
	return "Hello " + name + "!";
}
console.log(greet("Eric"));	// prints out Hello Eric!

/*Pop-up Boxes*/
confirm("Hi");	// Will return "true" if ok is selected, and return "false" if cancel is selected.
prompt("Bye");	// Will return whatever is in the text box.
alert("Hello"); // Will not return anything.

/*Callbacks*/
// Call backs in javascript are functions that are passed as arguments to other functions. 
// This is a very important feature of asynchronous programming, and it enables the function that recieves
// the callbakc to call our code when it finishes a long task, while allowing us to continue the execution of the code.
var callback = function(){
	console.log("Done!");
}
setTimeout(callback, 5000); // waits for 5 sec and prints out Done! when the 5 sec are up.

setTimeout(function(){
	console.log("Done!");
}, 5000); // Like regular functions, callbacks can receive arguments and be executed more than once.

/*Advanced tutorials*/
