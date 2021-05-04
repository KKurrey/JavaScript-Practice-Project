// 1. Ways to print in JavaScript
// alert("me");
// document.write("This is document write");

// 2. Javascript console API
// console.log("Hello World");
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("This is a warning");
// console.error("This is an error");

// 3. JavaScript Variables
// What are variables? - Conatiners to store data values

var number1 = 34;
var number2 = 56;
//console.log(number1 + number2);


// 4. Data types in JavaScript
// Numbers
var num1 = 455;
var num2 = 56.76;

// String
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects - (Key, Value) pairs
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.97
}

// Booleans
var a = true;
var b = false;
//console.log(a, b);

// By default undefined, when value not assigned
var und;
//console.log(und);

// Null
var n = null;
//console.log(n);

/*
At a very high level, there are two types of data types in JavaScript:
1. Primitive data types: undefined, null, number, string, boolean, Symbol
2. Reference data types: Arrays and Objects
*/

// Array
var arr1 = [1, 2, 3, 4, 5]
var arr2 = [5, 6, 'kranti', 7, 8]


// 5. Operators in JavaScript

// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is", a + b);
// console.log("The value of a - b is", a - b);
// console.log("The value of a * b is", a * b);
// console.log("The value of a / b is", a / b);

// Assignment Operators
var c = b;
//console.log("The value of c = b is", c);
c += 2 // c = c + 2
//console.log("The value of c += 2 is", c);
// c -= 2;
// c *= 2;
// c /= 2;

// Comparison Operator
var x = 34;
var y = 56;
//console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

/*
// Logical Operators

//Logical AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//Logical OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//Logical NOT
console.log(!false);
console.log(!true);
*/


// 6. Function in JavaScript
function avg(a, b)
{
    c = (a + b) / 2;
    return c;
}
// Dry Principle = Do not repeat yourself
var c1 = avg(4, 6);
var c2 = avg(14, 16);
// console.log(c1, c2);

// Note: In cosole, number is displayed in blue color
// and string is displayed in black color

/*
// Conditionals in JavaScript
var age = 25;


// 7. if-else in JavaScript

// Single if statement
if(age > 18)
{
    console.log("You can drink rasna water");
}

// if - else statement 
if( age > 18)
{
    console.log("You can drin rasna water");
}
else
{
    console.log("You cannot drink rasna water");
}

// if - else if ladder
if(age > 32){
    console.log("You are a 32 years old man");
}
else if(age > 26){
    console.log("You are a 26 years old man");
}
else if(age > 22){
    console.log("You are a 22 years old man");
}
else if(age > 18){
    console.log("You are a 18 years old man");
}
else{
    console.log("You are a kid");
}
console.log("End of ladder");

// function which takes age as an argument and return if the person can drink or not
function rasna(age){
    if( age > 18)
    {
        console.log("You can drink rasna water");
    }
    else
    {
        console.log("You cannot drink rasna water");
    }
}
rasna(32);
*/


// 8. Loops in JavaScript
// var arr = [1, 2, 3, 4, 5, 6, 7];
//console.log(arr);

// for loop
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// Another way to iterate array
// arr.forEach(function(element){
//     console.log(element);
// })


/*
const ac = 0;   //Make variable ac constant and its value cannot be changed
ac = ac + 1;   //Throw and error: Assignment to constant variable.
ac++;   //This will throw the same error

let j = 0;   //Creates a local variable and can be re-assigned
*/


// while loop
// let j = 0;
// while(j < arr.length){
//     console.log(arr[j]);
//     j++;
// }


// do while loop
// do{
//     console.log(arr[j]);
//     j++;
// }while(j < arr.length);


// var arr = [1, 2, 3, 4, 5, 6, 7];
// for(var i = 0; i < arr.length; i++){
//     if(i == 2){
//         //break;   //The loop will break when index = 2
//         continue;  //This will skip the value at index 2
//     }
//     console.log(arr[i]);
// }


// 9. Array Methods

let myArr = ["Fan", "Camera", 34, null, true];

// console.log(myArr.length);
//myArr.pop();   //Remove an item from the end of an Array
//myArr.push("Kranti");    //Add an item to the end of an Array
//myArr.shift();  //Remove an item from the beginning of an Array
// const newLen = myArr.unshift("Kranti");   //Add an item to the beginning of an Array and returns length of new array
// console.log(newLen);
// myArr.toString();  //convert array to string
// console.log(myArr); 

let d = [1, 4, 859, 29, 20, 59, 434, 523];
//console.log(d);
//d.sort();   //sort array in dictionary order
//console.log(d);
// let pos = d.indexOf(20);
// console.log(pos);

//Refere below link to know more about JavaScript array methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


// 10. String methods in JavaScript
let myLovelyString = "Kranti is a good girl good good";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));   //give the index of first occurance of the word "good"
// console.log(myLovelyString.lastIndexOf("good"));   //give the index of last occurance of the word "good"

//console.log(myLovelyString.slice(1, 4));   //print string from index 1 to 4-1(n to n-1)

d = myLovelyString.replace("Kranti", "Rita");  //Replace first occurance of "Kranti" from "Rita"
//d = d.replace("good", "bad");
//console.log(d, myLovelyString);


// 11. Date methods in JavaScript
let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


// 12. DOM(Document Object Model) Manipulation
// Using DOM methods, we can manipulate HTML, or can change the content of the page dynamically

// A. Element Search
let elem = document.getElementById('click'); //used when we want to target an element using its id
// console.log(elem);

let elemClass = document.getElementsByClassName("container");  //used when we want to target multiple elements using their class
// console.log(elemClass);
//elemClass[0].style.background = "yellow";  //change the background color of container class to yellow
elemClass[0].classList.add("bg-primary");  //add new class to elemClass and aplly the reflect the changes in document according to html file
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

//let tn = document.getElementsByTagName("button");
let tn = document.getElementsByTagName("div");
//console.log(tn);

let createElement = document.createElement("p");  //creating a paragraph
createElement.innerText = "This is a created paragraph";
tn[0].appendChild(createElement); //create new element to the first div

let createElement2 = document.createElement("b");  //creating a bold text
createElement2.innerText = "This is a created bold";
tn[0].replaceChild(createElement2, createElement);  //replace createElement content with createElement2 content on first div

//removeChild(element); ---> removes an element

// B. Document Properties
let loc = document.location;  //Gives location of document
//console.log(loc);
let til = document.title;  //Gives title of document
//console.log(til);
 let url = document.URL;  //Gives document URL
//console.log(url);
let scr = document.scripts;  //Gives HTML scripts
//console.log(scr);
let form = document.forms;  //Gives HTML forms
//console.log(form);
let lin = document.links;  //Gives all the links present in document
//console.log(lin);
 let img = document.images;  //Gives all the images present in document 
//console.log(img);
let dom = document.domain;  //Gives the domain of document
//console.log(dom);

// 13. Selecting using Query
let sel1 = document.querySelector(".container"); //Gives only one element of conatiner class
//console.log(sel1);
let sel2 = document.querySelectorAll(".container");  //Gives all the elements of conatiner class
//console.log(sel2);


// 14. Events in JavaScript
function clicked(){
//    console.log("The button was clicked");
}

window.onload = function(){
//    console.log("The document was loaded");
}

// firstContainer.addEventListener("click", function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b>We have clicked</b>";
//     console.log("Clicked on container");
// });

// firstContainer.addEventListener("mouseover", function(){
//     console.log("Mouse on container");
// });

// firstContainer.addEventListener("mouseout", function(){
//     console.log("Mouse out of container");
// });

// let prevHTML = document.querySelectorAll(".container")[1].innerHTML;
// firstContainer.addEventListener("mouseup", function(){
//     document.querySelectorAll(".container")[1].innerHTML = prevHTML; 
//     console.log("Mouse up when clicked on container");
// });

// firstContainer.addEventListener("mousedown", function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b>We have clicked</b>";
//     console.log("Mouse down when clicked on container");
// });


// 15. Arrow Functions

//Normal function creation
function summ(a, b){
    return a + b;
}

// function using arrow
summ = (a, b)=>{
    return a + b;
}

// logKaro = ()=>{
//     document.querySelectorAll(".container")[1].innerHTML = "<b>Set interval fired</b>";
//     console.log("I am your log");
// }


// 16.SetTimeout and SetInterval

//SetTimeout(function, returnTime)
//setTimeout(logKaro, 2000);  //print the function after 2000ms
//let clr = setTimeout(logKaro, 5000);

//setInterval(logKaro, 2000); //Continuously print the fuction after every 2000ms
//let clr = setInterval(logKaro, 2000);

//use clearInterval/clearTimeout to cancel setInterval/setTimeout


// 17. JavaScript localStorage

// localStorage.setItem("name", "Kranti");
// localStorage;
// localStorage.getItem("name");
// localStorage.removeItem("name");
// localStorage.clear();


// 18. JSON (JavaScript Object Notation) ---> used to exchange data (data transportation)
obj = {name: "Kranti", length: 1, a: {this: "that"}};
jso = JSON.stringify(obj);  //convert object to string
// console.log(jso);
// console.log(typeof jso);

parsed = JSON.parse(`{"name":"Kranti","length":1,"a":{"this":"that"}}`);  //convert string to Object
// console.log(parsed);
// console.log(typeof parsed);


// 19. JavaScript Version
// ECMA Script